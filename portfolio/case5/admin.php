<?php
/**
 * Админ-панель сайта «Берлога»
 * Единый файл: авторизация, управление проектами, услугами, процессом и настройками.
 */

session_start();

// ========== КОНФИГУРАЦИЯ ==========
define('ADMIN_LOGIN', 'admin');

// Хеш пароля хранится в отдельном файле, чтобы не пересоздавался при каждом запуске
$passFile = __DIR__ . '/data/password_hash.php';
if (!file_exists($passFile)) {
    $hash = password_hash('berlogadom', PASSWORD_DEFAULT);
    file_put_contents($passFile, '<?php return \'' . $hash . '\';');
}
define('PASSWORD_HASH', include $passFile);
define('DATA_DIR', __DIR__ . '/data');
define('IMAGES_DIR', __DIR__ . '/assets/images');
define('CASES_DIR', __DIR__ . '/assets/cases');
define('GALLERY_DIR', __DIR__ . '/assets/gallery');
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5 МБ
$ALLOWED_EXT = ['jpg', 'jpeg', 'png', 'webp'];

// ========== ИНИЦИАЛИЗАЦИЯ ДАННЫХ ==========
if (!is_dir(DATA_DIR)) {
    mkdir(DATA_DIR, 0755, true);
}
if (!is_dir(IMAGES_DIR)) {
    mkdir(IMAGES_DIR, 0755, true);
}
if (!is_dir(CASES_DIR)) {
    mkdir(CASES_DIR, 0755, true);
}
if (!is_dir(GALLERY_DIR)) {
    mkdir(GALLERY_DIR, 0755, true);
}

// Создать gallery.json, если нет
if (!file_exists(DATA_DIR . '/gallery.json')) {
    $defaultGallery = [
        'items' => [
            ['id' => 'gallery_1', 'images' => ['assets/cases/1.webp','assets/cases/2.webp'], 'caption' => 'Фундамент', 'description' => 'Закладка надёжного основания для вашего будущего дома.'],
            ['id' => 'gallery_2', 'images' => ['assets/cases/3.webp','assets/cases/4.webp','assets/cases/5.webp'], 'caption' => 'Подготовка бревна', 'description' => 'Ручной отбор и подготовка каждого бревна.'],
            ['id' => 'gallery_3', 'images' => ['assets/cases/6.webp','assets/cases/7.webp'], 'caption' => 'Рубка сруба', 'description' => 'Ручная рубка сруба по традиционным технологиям.']
        ]
    ];
    file_put_contents(DATA_DIR . '/gallery.json', json_encode($defaultGallery, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}

// Создать process.json, если нет
if (!file_exists(DATA_DIR . '/process.json')) {
    $defaultProcess = [
        'description' => 'Мы строим дома и бани из бревна ручной рубки. Каждый этап — от фундамента до кровли — выполняется с высочайшим качеством и вниманием к деталям.',
        'steps' => [
            ['title' => '1. Фундамент', 'description' => 'Закладка надёжного основания для вашего будущего дома.'],
            ['title' => '2. Рубка сруба', 'description' => 'Ручная рубка бревна по традиционным технологиям (Русская, Канадская, Норвежская).'],
            ['title' => '3. Установка кровли', 'description' => 'Монтаж стропильной системы и кровельного покрытия.'],
            ['title' => '4. Отделка и утепление', 'description' => 'Финишные работы — шлифовка, пропитка, внутренняя отделка.']
        ],
        'gallery' => []
    ];
    file_put_contents(DATA_DIR . '/process.json', json_encode($defaultProcess, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========
function jsonRead($file) {
    return json_decode(file_get_contents($file), true);
}
function jsonWrite($file, $data) {
    file_put_contents($file, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}

function isAuth() {
    return !empty($_SESSION['admin_logged_in']);
}

function csrfToken() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function verifyCsrf($token) {
    return hash_equals($_SESSION['csrf_token'] ?? '', $token);
}

function redirect($url, $msg = '') {
    $sep = strpos($url, '?') === false ? '?' : '&';
    header('Location: ' . $url . ($msg ? $sep . 'msg=' . urlencode($msg) : ''));
    exit;
}

function msgHtml() {
    if (!empty($_GET['msg'])) {
        $msg = htmlspecialchars($_GET['msg']);
        echo "<div class='msg success'>$msg</div>";
    }
}

function inputVal($key, $default = '') {
    return isset($_POST[$key]) ? trim($_POST[$key]) : $default;
}

function fileExt($name) {
    return strtolower(pathinfo($name, PATHINFO_EXTENSION));
}

function uploadFile($file, $destDir, $destName) {
    global $ALLOWED_EXT;
    if ($file['error'] !== UPLOAD_ERR_OK) return null;
    $ext = fileExt($file['name']);
    if (!in_array($ext, $ALLOWED_EXT)) return null;
    if ($file['size'] > MAX_FILE_SIZE) return null;
    $destPath = $destDir . '/' . $destName . '.' . $ext;
    move_uploaded_file($file['tmp_name'], $destPath);
    return $destName . '.' . $ext;
}

// ========== ОБРАБОТКА ДЕЙСТВИЙ ==========
$action = $_GET['action'] ?? '';
$msg = '';

// Выход
if ($action === 'logout') {
    session_destroy();
    redirect('admin.php');
}

// Вход
if ($action === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = $_POST['login'] ?? '';
    $pass = $_POST['password'] ?? '';
    if ($login === ADMIN_LOGIN && password_verify($pass, PASSWORD_HASH)) {
        $_SESSION['admin_logged_in'] = true;
        redirect('admin.php');
    }
    redirect('admin.php?action=login', 'Неверный логин или пароль');
}

// Проверка авторизации для всех действий, кроме входа
if ($action !== 'login' && !isAuth()) {
    redirect('admin.php?action=login');
}

// ---- СОХРАНЕНИЕ НАСТРОЕК ----
if ($action === 'save_settings' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verifyCsrf($_POST['csrf'] ?? '')) redirect('admin.php?action=settings', 'Ошибка безопасности');
    $data = jsonRead(DATA_DIR . '/settings.json');
    $data['companyName'] = inputVal('companyName');
    $data['phone'] = inputVal('phone');
    $data['email'] = inputVal('email');
    $data['address'] = inputVal('address');
    $data['vk'] = inputVal('vk');
    $data['telegram'] = inputVal('telegram');
    $data['mapLink'] = inputVal('mapLink');
    $data['ogImage'] = inputVal('ogImage');
    $data['ogDesc'] = inputVal('ogDesc');
    jsonWrite(DATA_DIR . '/settings.json', $data);
    redirect('admin.php?action=settings', 'Настройки сохранены');
}

// ---- СОХРАНЕНИЕ ПРОЕКТА ----
if ($action === 'save_project' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verifyCsrf($_POST['csrf'] ?? '')) redirect('admin.php?action=projects', 'Ошибка безопасности');
    $projects = jsonRead(DATA_DIR . '/projects.json');
    $id = (int)inputVal('id', 0);

    if ($id === 0) {
        // Новый проект
        $id = 1;
        foreach ($projects as $p) {
            if ($p['id'] >= $id) $id = $p['id'] + 1;
        }
        $project = [
            'id' => $id,
            'name' => inputVal('name'),
            'type' => inputVal('type'),
            'area' => (float)inputVal('area'),
            'price' => (float)inputVal('price'),
            'image' => '',
            'gallery' => [],
            'description' => inputVal('description'),
            'serviceId' => inputVal('serviceId'),
            'material' => inputVal('material'),
            'timeline' => inputVal('timeline')
        ];
        $projects[] = $project;
        $idx = count($projects) - 1;
    } else {
        // Существующий
        $idx = null;
        foreach ($projects as $k => $p) {
            if ($p['id'] === $id) { $idx = $k; break; }
        }
        if ($idx === null) redirect('admin.php?action=projects', 'Проект не найден');
        $projects[$idx]['name'] = inputVal('name');
        $projects[$idx]['type'] = inputVal('type');
        $projects[$idx]['area'] = (float)inputVal('area');
        $projects[$idx]['price'] = (float)inputVal('price');
        $projects[$idx]['description'] = inputVal('description');
        $projects[$idx]['serviceId'] = inputVal('serviceId');
        $projects[$idx]['material'] = inputVal('material');
        $projects[$idx]['timeline'] = inputVal('timeline');
        $project = &$projects[$idx];
    }

    // Загрузка главного фото
    if (!empty($_FILES['image']['name'])) {
        $prefix = 'project_' . $id;
        $fname = uploadFile($_FILES['image'], IMAGES_DIR, $prefix);
        if ($fname) {
            $project['image'] = 'assets/images/' . $fname;
        }
    }

    // Загрузка галереи (несколько файлов)
    if (!empty($_FILES['gallery_files']['name'][0])) {
        $existing = $project['gallery'];
        $galleryIdx = count($existing) + 1;
        foreach ($_FILES['gallery_files']['name'] as $gi => $gname) {
            if (empty($gname)) continue;
            $gfile = [
                'name' => $_FILES['gallery_files']['name'][$gi],
                'type' => $_FILES['gallery_files']['type'][$gi],
                'tmp_name' => $_FILES['gallery_files']['tmp_name'][$gi],
                'error' => $_FILES['gallery_files']['error'][$gi],
                'size' => $_FILES['gallery_files']['size'][$gi]
            ];
            $gprefix = 'project_' . $id . '_' . $galleryIdx;
            $gfname = uploadFile($gfile, IMAGES_DIR, $gprefix);
            if ($gfname) {
                $existing[] = 'assets/images/' . $gfname;
                $galleryIdx++;
            }
        }
        $project['gallery'] = $existing;
    }

    jsonWrite(DATA_DIR . '/projects.json', $projects);
    redirect('admin.php?action=projects', 'Проект сохранён');
}

// ---- УДАЛЕНИЕ ПРОЕКТА ----
if ($action === 'delete_project' && !empty($_GET['id'])) {
    if (!verifyCsrf($_GET['csrf'] ?? '')) redirect('admin.php?action=projects', 'Ошибка безопасности');
    $projects = jsonRead(DATA_DIR . '/projects.json');
    $id = (int)$_GET['id'];
    $projects = array_values(array_filter($projects, function($p) use ($id) {
        return $p['id'] !== $id;
    }));
    jsonWrite(DATA_DIR . '/projects.json', $projects);
    redirect('admin.php?action=projects', 'Проект удалён');
}

// ---- УДАЛЕНИЕ ФОТО ИЗ ГАЛЕРЕИ ПРОЕКТА ----
if ($action === 'delete_project_gallery' && !empty($_GET['id']) && !empty($_GET['photo'])) {
    if (!verifyCsrf($_GET['csrf'] ?? '')) redirect('admin.php?action=projects', 'Ошибка безопасности');
    $projects = jsonRead(DATA_DIR . '/projects.json');
    $pid = (int)$_GET['id'];
    $photoPath = $_GET['photo'];
    foreach ($projects as $k => $p) {
        if ($p['id'] === $pid) {
            $projects[$k]['gallery'] = array_values(array_filter($p['gallery'], function($g) use ($photoPath) {
                return $g !== $photoPath;
            }));
            break;
        }
    }
    jsonWrite(DATA_DIR . '/projects.json', $projects);
    redirect('admin.php?action=project_edit&id=' . $pid, 'Фото удалено');
}

// ---- ДОБАВЛЕНИЕ УСЛУГИ ----
if ($action === 'add_service' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verifyCsrf($_POST['csrf'] ?? '')) redirect('admin.php?action=services', 'Ошибка безопасности');
    $services = jsonRead(DATA_DIR . '/services.json');
    $id = inputVal('new_id');
    if (!$id) redirect('admin.php?action=services', 'Укажите ID услуги');
    // Проверка уникальности
    foreach ($services as $s) {
        if ($s['id'] === $id) redirect('admin.php?action=services', 'Услуга с таким ID уже существует');
    }
    $advantages = [];
    foreach (explode("\n", inputVal('new_advantages')) as $line) {
        $line = trim($line);
        if ($line) $advantages[] = $line;
    }
    $service = [
        'id' => $id,
        'title' => inputVal('new_title'),
        'slug' => $id,
        'pricePerM2' => (int)inputVal('new_pricePerM2'),
        'description' => inputVal('new_description'),
        'image' => '',
        'advantages' => $advantages,
        'metaTitle' => inputVal('new_metaTitle'),
        'metaDesc' => inputVal('new_metaDesc')
    ];
    // Загрузка фото
    if (!empty($_FILES['new_image']['name'])) {
        $ext = fileExt($_FILES['new_image']['name']);
        if (in_array($ext, $ALLOWED_EXT) && $_FILES['new_image']['size'] <= MAX_FILE_SIZE) {
            $fname = 'service_' . $id . '.' . $ext;
            move_uploaded_file($_FILES['new_image']['tmp_name'], IMAGES_DIR . '/' . $fname);
            $service['image'] = 'assets/images/' . $fname;
        }
    }
    $services[] = $service;
    jsonWrite(DATA_DIR . '/services.json', $services);
    redirect('admin.php?action=services', 'Услуга добавлена');
}

// ---- СОХРАНЕНИЕ УСЛУГИ ----
if ($action === 'save_service' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verifyCsrf($_POST['csrf'] ?? '')) redirect('admin.php?action=services', 'Ошибка безопасности');
    $services = jsonRead(DATA_DIR . '/services.json');
    $id = inputVal('id');
    $idx = null;
    foreach ($services as $k => $s) {
        if ($s['id'] === $id) { $idx = $k; break; }
    }
    if ($idx === null) redirect('admin.php?action=services', 'Услуга не найдена');

    $services[$idx]['title'] = inputVal('title');
    $services[$idx]['pricePerM2'] = (int)inputVal('pricePerM2');
    $services[$idx]['description'] = inputVal('description');
    $services[$idx]['metaTitle'] = inputVal('metaTitle');
    $services[$idx]['metaDesc'] = inputVal('metaDesc');

    // Преимущества
    $advantages = [];
    foreach (explode("\n", inputVal('advantages')) as $line) {
        $line = trim($line);
        if ($line) $advantages[] = $line;
    }
    $services[$idx]['advantages'] = $advantages;

    // Загрузка фото
    if (!empty($_FILES['image']['name'])) {
        $ext = fileExt($_FILES['image']['name']);
        if (in_array($ext, $ALLOWED_EXT) && $_FILES['image']['size'] <= MAX_FILE_SIZE) {
            $fname = 'service_' . $id . '.' . $ext;
            move_uploaded_file($_FILES['image']['tmp_name'], IMAGES_DIR . '/' . $fname);
            $services[$idx]['image'] = 'assets/images/' . $fname;
        }
    }

    jsonWrite(DATA_DIR . '/services.json', $services);
    redirect('admin.php?action=services', 'Услуга сохранена');
}

// ---- УДАЛЕНИЕ УСЛУГИ ----
if ($action === 'delete_service' && !empty($_GET['id'])) {
    if (!verifyCsrf($_GET['csrf'] ?? '')) redirect('admin.php?action=services', 'Ошибка безопасности');
    $services = jsonRead(DATA_DIR . '/services.json');
    $id = $_GET['id'];
    $services = array_values(array_filter($services, function($s) use ($id) {
        return $s['id'] !== $id;
    }));
    jsonWrite(DATA_DIR . '/services.json', $services);
    redirect('admin.php?action=services', 'Услуга удалена');
}

// ---- СОХРАНЕНИЕ ЦЕН КАЛЬКУЛЯТОРА ----
if ($action === 'save_prices' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verifyCsrf($_POST['csrf'] ?? '')) redirect('admin.php?action=prices', 'Ошибка безопасности');
    $services = jsonRead(DATA_DIR . '/services.json');
    $prices = $_POST['price'] ?? [];
    foreach ($services as $k => $s) {
        if (isset($prices[$s['id']])) {
            $services[$k]['pricePerM2'] = (int)$prices[$s['id']];
        }
    }
    jsonWrite(DATA_DIR . '/services.json', $services);
    redirect('admin.php?action=prices', 'Цены сохранены');
}

// ---- СОХРАНЕНИЕ ПРОЦЕССА ----
if ($action === 'save_process' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verifyCsrf($_POST['csrf'] ?? '')) redirect('admin.php?action=process', 'Ошибка безопасности');
    $process = jsonRead(DATA_DIR . '/process.json');

    $process['description'] = inputVal('description');

    // Этапы
    $titles = $_POST['step_title'] ?? [];
    $descs = $_POST['step_desc'] ?? [];
    $steps = [];
    foreach ($titles as $i => $t) {
        $t = trim($t);
        $d = trim($descs[$i] ?? '');
        if ($t) $steps[] = ['title' => $t, 'description' => $d];
    }
    $process['steps'] = $steps;

    jsonWrite(DATA_DIR . '/process.json', $process);
    redirect('admin.php?action=process', 'Данные процесса сохранены');
}



// ---- ГАЛЕРЕЯ: ЗАГРУЗКА ФОТО ----
if ($action === 'gallery_upload' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verifyCsrf($_POST['csrf'] ?? '')) redirect('admin.php?action=gallery', 'Ошибка безопасности');
    if (empty($_FILES['gallery_files']['name'][0])) redirect('admin.php?action=gallery', 'Выберите хотя бы один файл');

    $gallery = jsonRead(DATA_DIR . '/gallery.json');

    $maxId = 0;
    foreach ($gallery['items'] as $item) {
        $num = (int)str_replace('gallery_', '', $item['id']);
        if ($num > $maxId) $maxId = $num;
    }

    $uploadedImages = [];
    foreach ($_FILES['gallery_files']['name'] as $gi => $gname) {
        if (empty($gname)) continue;
        $gfile = [
            'name' => $_FILES['gallery_files']['name'][$gi],
            'type' => $_FILES['gallery_files']['type'][$gi],
            'tmp_name' => $_FILES['gallery_files']['tmp_name'][$gi],
            'error' => $_FILES['gallery_files']['error'][$gi],
            'size' => $_FILES['gallery_files']['size'][$gi]
        ];
        $ext = fileExt($gfile['name']);
        if (!in_array($ext, $ALLOWED_EXT)) continue;
        if ($gfile['size'] > MAX_FILE_SIZE) continue;
        $destName = 'gallery_' . time() . '_' . $gi . '.' . $ext;
        move_uploaded_file($gfile['tmp_name'], GALLERY_DIR . '/' . $destName);
        $uploadedImages[] = 'assets/gallery/' . $destName;
    }

    if (empty($uploadedImages)) redirect('admin.php?action=gallery', 'Не удалось загрузить файлы');

    $gallery['items'][] = [
        'id' => 'gallery_' . ($maxId + 1),
        'images' => $uploadedImages,
        'caption' => inputVal('caption') ?: pathinfo($_FILES['gallery_files']['name'][0], PATHINFO_FILENAME),
        'description' => inputVal('description') ?: ''
    ];
    jsonWrite(DATA_DIR . '/gallery.json', $gallery);
    redirect('admin.php?action=gallery', 'Фото загружены');
}

// ---- ГАЛЕРЕЯ: РЕДАКТИРОВАНИЕ ПОДПИСИ И ОПИСАНИЯ ----
if ($action === 'gallery_edit' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verifyCsrf($_POST['csrf'] ?? '')) redirect('admin.php?action=gallery', 'Ошибка безопасности');
    $id = $_POST['id'] ?? '';
    $caption = inputVal('caption');
    $description = inputVal('description');
    if (!$id) redirect('admin.php?action=gallery', 'ID не указан');

    $gallery = jsonRead(DATA_DIR . '/gallery.json');
    foreach ($gallery['items'] as $k => $item) {
        if ($item['id'] === $id) {
            $gallery['items'][$k]['caption'] = $caption;
            $gallery['items'][$k]['description'] = $description;
            break;
        }
    }
    jsonWrite(DATA_DIR . '/gallery.json', $gallery);
    redirect('admin.php?action=gallery', 'Данные сохранены');
}

// ---- ГАЛЕРЕЯ: ДОБАВЛЕНИЕ ФОТО К СУЩЕСТВУЮЩЕМУ ЭЛЕМЕНТУ ----
if ($action === 'gallery_add_images' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!verifyCsrf($_POST['csrf'] ?? '')) redirect('admin.php?action=gallery', 'Ошибка безопасности');
    $id = $_POST['id'] ?? '';
    if (!$id || empty($_FILES['more_images']['name'][0])) redirect('admin.php?action=gallery', 'Нет файлов');

    $gallery = jsonRead(DATA_DIR . '/gallery.json');
    foreach ($gallery['items'] as $k => $item) {
        if ($item['id'] === $id) {
            foreach ($_FILES['more_images']['name'] as $gi => $gname) {
                if (empty($gname)) continue;
                $gfile = [
                    'name' => $_FILES['more_images']['name'][$gi],
                    'type' => $_FILES['more_images']['type'][$gi],
                    'tmp_name' => $_FILES['more_images']['tmp_name'][$gi],
                    'error' => $_FILES['more_images']['error'][$gi],
                    'size' => $_FILES['more_images']['size'][$gi]
                ];
                $ext = fileExt($gfile['name']);
                if (!in_array($ext, $ALLOWED_EXT)) continue;
                if ($gfile['size'] > MAX_FILE_SIZE) continue;
                $destName = 'gallery_' . time() . '_' . $gi . '.' . $ext;
                move_uploaded_file($gfile['tmp_name'], GALLERY_DIR . '/' . $destName);
                $gallery['items'][$k]['images'][] = 'assets/gallery/' . $destName;
            }
            break;
        }
    }
    jsonWrite(DATA_DIR . '/gallery.json', $gallery);
    redirect('admin.php?action=gallery', 'Фото добавлены');
}

// ---- ГАЛЕРЕЯ: УДАЛЕНИЕ ОДНОГО ФОТО ИЗ ЭЛЕМЕНТА ----
if ($action === 'gallery_delete_image' && !empty($_GET['id']) && isset($_GET['idx']) && $_GET['idx'] !== '') {
    if (!verifyCsrf($_GET['csrf'] ?? '')) redirect('admin.php?action=gallery', 'Ошибка безопасности');
    $id = $_GET['id'];
    $idx = (int)$_GET['idx'];
    $gallery = jsonRead(DATA_DIR . '/gallery.json');
    foreach ($gallery['items'] as $k => $item) {
        if ($item['id'] === $id && isset($item['images'][$idx])) {
            $fullPath = __DIR__ . '/' . $item['images'][$idx];
            if (file_exists($fullPath)) unlink($fullPath);
            array_splice($gallery['items'][$k]['images'], $idx, 1);
            break;
        }
    }
    jsonWrite(DATA_DIR . '/gallery.json', $gallery);
    redirect('admin.php?action=gallery', 'Фото удалено');
}

// ---- ГАЛЕРЕЯ: УДАЛЕНИЕ ЭЛЕМЕНТА ----
if ($action === 'gallery_delete' && !empty($_GET['id'])) {
    if (!verifyCsrf($_GET['csrf'] ?? '')) redirect('admin.php?action=gallery', 'Ошибка безопасности');
    $id = $_GET['id'];
    $gallery = jsonRead(DATA_DIR . '/gallery.json');
    foreach ($gallery['items'] as $k => $item) {
        if ($item['id'] === $id) {
            foreach ($item['images'] as $img) {
                $fullPath = __DIR__ . '/' . $img;
                if (file_exists($fullPath)) unlink($fullPath);
            }
            array_splice($gallery['items'], $k, 1);
            break;
        }
    }
    jsonWrite(DATA_DIR . '/gallery.json', $gallery);
    redirect('admin.php?action=gallery', 'Фото удалено');
}

// ========== СТРАНИЦА ВХОДА ==========
if (!isAuth() || $action === 'login') {
?><!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Вход | Админ-панель Берлога</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body {
  font-family: 'Georgia', serif;
  background: #090705;
  color: #E8DDD0;
  display: flex; align-items: center; justify-content: center;
  min-height: 100vh;
}
.login-box {
  background: #12100E;
  border: 1px solid #473928;
  border-radius: 12px;
  padding: 48px 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}
.login-box h1 {
  font-family: 'Georgia', serif;
  font-size: 28px;
  color: #CFA159;
  margin-bottom: 8px;
  letter-spacing: 0.04em;
}
.login-box p {
  color: #B5A08C;
  margin-bottom: 32px;
  font-size: 14px;
}
.login-box label {
  display: block;
  text-align: left;
  font-size: 13px;
  color: #A58E7A;
  margin-bottom: 6px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.login-box input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #473928;
  border-radius: 6px;
  background: #090705;
  color: #E8DDD0;
  font-size: 16px;
  margin-bottom: 20px;
  outline: none;
}
.login-box input:focus { border-color: #8F7653; }
.login-box button {
  width: 100%;
  padding: 14px;
  background: #8F7653;
  color: #090705;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.04em;
}
.login-box button:hover { background: #A88A60; }
.msg.error { color: #E74C3C; margin-bottom: 16px; font-size: 14px; }
</style>
</head>
<body>
<div class="login-box">
  <h1>Берлога</h1>
  <p>Админ-панель</p>
  <?php if (!empty($_GET['msg'])): ?>
    <div class="msg error"><?=htmlspecialchars($_GET['msg'])?></div>
  <?php endif; ?>
  <form method="post" action="admin.php?action=login">
    <label>Логин</label>
    <input type="text" name="login" required autofocus>
    <label>Пароль</label>
    <input type="password" name="password" required>
    <button type="submit">Войти</button>
  </form>
</div>
</body>
</html>
<?php exit; } ?>

<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Админ-панель | Берлога</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body {
  font-family: 'Georgia', serif;
  background: #090705;
  color: #E8DDD0;
  min-height: 100vh;
}
a { color: #CFA159; text-decoration: none; }
a:hover { color: #E8DDD0; }

/* Шапка */
.admin-header {
  background: #12100E;
  border-bottom: 1px solid #473928;
  padding: 16px 24px;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}
.admin-header h1 {
  font-size: 20px;
  color: #CFA159;
  letter-spacing: 0.04em;
}
.admin-header .admin-nav {
  display: flex; gap: 8px; flex-wrap: wrap;
}
.admin-header .admin-nav a {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  background: #1A1816;
  border: 1px solid #473928;
  color: #E8DDD0;
  transition: all 0.2s;
}
.admin-header .admin-nav a:hover,
.admin-header .admin-nav a.active {
  background: #8F7653;
  color: #090705;
  border-color: #8F7653;
}
.admin-header .logout-btn {
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 13px;
  background: transparent;
  border: 1px solid #473928;
  color: #B5A08C;
  cursor: pointer;
}
.admin-header .logout-btn:hover { border-color: #E74C3C; color: #E74C3C; }

/* Контейнер */
.admin-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
}

.msg {
  padding: 12px 20px;
  border-radius: 6px;
  margin-bottom: 24px;
  font-size: 14px;
}
.msg.success {
  background: rgba(143, 118, 83, 0.2);
  border: 1px solid #8F7653;
  color: #CFA159;
}

h2 {
  font-family: 'Georgia', serif;
  font-size: 24px;
  color: #CFA159;
  letter-spacing: 0.04em;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #473928;
}

/* Формы */
.form-group {
  margin-bottom: 16px;
}
.form-group label {
  display: block;
  font-size: 13px;
  color: #A58E7A;
  margin-bottom: 6px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #473928;
  border-radius: 6px;
  background: #12100E;
  color: #E8DDD0;
  font-size: 15px;
  font-family: 'Georgia', serif;
  outline: none;
}
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: #8F7653;
}
.form-group textarea {
  min-height: 100px;
  resize: vertical;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 767px) {
  .form-row { grid-template-columns: 1fr; }
}
.btn {
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.03em;
  font-family: 'Georgia', serif;
  transition: all 0.2s;
}
.btn-gold {
  background: #8F7653;
  color: #090705;
}
.btn-gold:hover { background: #A88A60; }
.btn-danger {
  background: transparent;
  border: 1px solid #E74C3C;
  color: #E74C3C;
}
.btn-danger:hover { background: rgba(231,76,60,0.15); }
.btn-outline {
  background: transparent;
  border: 1px solid #473928;
  color: #E8DDD0;
}
.btn-outline:hover { background: #1A1816; }
.btn-sm { padding: 6px 14px; font-size: 12px; }
.mt-16 { margin-top: 16px; }
.mb-16 { margin-bottom: 16px; }
.mr-8 { margin-right: 8px; }

/* Таблицы */
.table-wrap { overflow-x: auto; }
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
table th, table td {
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid #2A2219;
}
table th {
  color: #A58E7A;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
table tr:hover td { background: rgba(143,118,83,0.05); }
table .actions { white-space: nowrap; }

/* Карточки */
.card {
  background: #12100E;
  border: 1px solid #473928;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
}
.card h3 {
  font-size: 18px;
  color: #CFA159;
  margin-bottom: 16px;
}

/* Галерея админки */
.admin-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  margin-top: 12px;
}
.admin-gallery-item {
  background: #1A1816;
  border: 1px solid #473928;
  border-radius: 6px;
  overflow: hidden;
  text-align: center;
}
.admin-gallery-item img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
}
.admin-gallery-item .g-actions {
  padding: 6px 8px;
  display: flex; gap: 4px; justify-content: center;
}
.admin-gallery-item .g-caption {
  font-size: 11px;
  color: #B5A08C;
  padding: 4px 8px;
}

/* Всплывающее сообщение */
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #1A1816;
  border: 1px solid #8F7653;
  border-radius: 8px;
  padding: 14px 20px;
  color: #CFA159;
  font-size: 14px;
  z-index: 1000;
  box-shadow: 0 8px 32px rgba(0,0,0,0.6);
}
</style>
</head>
<body>

<div class="admin-header">
  <h1>Берлога · Админ-панель</h1>
  <div class="admin-nav">
    <a href="admin.php" class="<?=empty($action)?'active':''?>">Главная</a>
    <a href="admin.php?action=projects" class="<?=in_array($action,['projects','project_edit','project_add'])?'active':''?>">Проекты</a>
    <a href="admin.php?action=services" class="<?=in_array($action,['services','service_add','service_edit'])?'active':''?>">Услуги</a>
    <a href="admin.php?action=prices" class="<?=$action==='prices'?'active':''?>">Цены</a>
    <a href="admin.php?action=gallery" class="<?=$action==='gallery'?'active':''?>">Галерея работ</a>
    <a href="admin.php?action=settings" class="<?=$action==='settings'?'active':''?>">Настройки</a>
  </div>
  <a href="admin.php?action=logout" class="logout-btn" onclick="return confirm('Выйти из админ-панели?')">Выйти</a>
</div>

<div class="admin-content">
  <?php msgHtml(); ?>

  <!-- ==================== ПРОЕКТЫ ==================== -->
  <?php if ($action === 'projects'): $projects = jsonRead(DATA_DIR . '/projects.json'); ?>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:24px;">
      <h2 style="border:none;padding:0;margin:0;">Проекты</h2>
      <a href="admin.php?action=project_add" class="btn btn-gold">+ Добавить проект</a>
    </div>
    <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Название</th><th>Тип</th><th>Площадь</th><th>Цена</th><th>Фото</th><th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($projects as $p): ?>
        <tr>
          <td><?=$p['id']?></td>
          <td><?=htmlspecialchars($p['name'])?></td>
          <td><?=$p['type'] === 'doma' ? 'Дом' : 'Баня'?></td>
          <td><?=$p['area']?> м²</td>
          <td><?=number_format($p['price'], 0, '.', ' ')?> ₽</td>
          <td><?=$p['image'] ? '<img src="'.$p['image'].'" style="width:60px;height:40px;object-fit:cover;border-radius:4px;">' : '—'?></td>
          <td class="actions">
            <a href="admin.php?action=project_edit&id=<?=$p['id']?>" class="btn btn-outline btn-sm">Редактировать</a>
            <a href="admin.php?action=delete_project&id=<?=$p['id']?>&csrf=<?=csrfToken()?>" class="btn btn-danger btn-sm" onclick="return confirm('Удалить проект «<?=htmlspecialchars($p['name'], ENT_QUOTES)?>»?')">Удалить</a>
          </td>
        </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
    </div>

  <!-- ==================== РЕДАКТОР ПРОЕКТА ==================== -->
  <?php elseif ($action === 'project_edit' || $action === 'project_add'):
    $projects = jsonRead(DATA_DIR . '/projects.json');
    $p = ['id'=>0,'name'=>'','type'=>'doma','area'=>'','price'=>'','image'=>'','gallery'=>[],'description'=>'','serviceId'=>'doma','material'=>'','timeline'=>''];
    $isEdit = false;
    if ($action === 'project_edit' && !empty($_GET['id'])) {
      $pid = (int)$_GET['id'];
      foreach ($projects as $pp) {
        if ($pp['id'] === $pid) { $p = $pp; $isEdit = true; break; }
      }
    }
  ?>
    <h2><?=$isEdit ? 'Редактировать проект' : 'Добавить проект'?></h2>
    <div class="card">
    <form method="post" action="admin.php?action=save_project" enctype="multipart/form-data">
      <input type="hidden" name="csrf" value="<?=csrfToken()?>">
      <input type="hidden" name="id" value="<?=$p['id']?>">

      <div class="form-row">
        <div class="form-group">
          <label>Название</label>
          <input type="text" name="name" value="<?=htmlspecialchars($p['name'])?>" required>
        </div>
        <div class="form-group">
          <label>Тип</label>
          <select name="type">
            <option value="doma" <?=$p['type']==='doma'?'selected':''?>>Дом</option>
            <option value="bani" <?=$p['type']==='bani'?'selected':''?>>Баня</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Площадь (м²)</label>
          <input type="number" step="0.1" name="area" value="<?=htmlspecialchars($p['area'])?>" required>
        </div>
        <div class="form-group">
          <label>Цена (₽)</label>
          <input type="number" name="price" value="<?=htmlspecialchars($p['price'])?>" required>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Материал</label>
          <input type="text" name="material" value="<?=htmlspecialchars($p['material'])?>">
        </div>
        <div class="form-group">
          <label>Сроки строительства</label>
          <input type="text" name="timeline" value="<?=htmlspecialchars($p['timeline'])?>">
        </div>
      </div>

      <div class="form-group">
        <label>Service ID</label>
        <select name="serviceId">
          <option value="doma" <?=$p['serviceId']==='doma'?'selected':''?>>Дома</option>
          <option value="bani" <?=$p['serviceId']==='bani'?'selected':''?>>Бани</option>
        </select>
      </div>

      <div class="form-group">
        <label>Описание</label>
        <textarea name="description" rows="4"><?=htmlspecialchars($p['description'])?></textarea>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Основное фото</label>
          <input type="file" name="image" accept="image/jpeg,image/png,image/webp">
          <?php if ($p['image']): ?>
            <div style="margin-top:8px;"><img src="<?=$p['image']?>" style="max-width:200px;max-height:120px;border-radius:4px;border:1px solid #473928;"></div>
          <?php endif; ?>
        </div>
        <div class="form-group">
          <label>Фото галереи (можно выбрать несколько)</label>
          <input type="file" name="gallery_files[]" multiple accept="image/jpeg,image/png,image/webp">
        </div>
      </div>

      <?php if ($isEdit && !empty($p['gallery'])): ?>
      <div class="form-group">
        <label>Текущая галерея</label>
        <div class="admin-gallery">
          <?php foreach ($p['gallery'] as $g): ?>
          <div class="admin-gallery-item">
            <img src="<?=$g?>" alt="">
            <div class="g-actions">
              <a href="admin.php?action=delete_project_gallery&id=<?=$p['id']?>&photo=<?=urlencode($g)?>&csrf=<?=csrfToken()?>" class="btn btn-danger btn-sm" onclick="return confirm('Удалить фото?')">Удалить</a>
            </div>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
      <?php endif; ?>

      <div class="mt-16">
        <button type="submit" class="btn btn-gold">Сохранить проект</button>
        <a href="admin.php?action=projects" class="btn btn-outline mr-8">Отмена</a>
      </div>
    </form>
    </div>

  <!-- ==================== УСЛУГИ ==================== -->
  <?php elseif ($action === 'services'): $services = jsonRead(DATA_DIR . '/services.json'); ?>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:24px;">
      <h2 style="border:none;padding:0;margin:0;">Услуги</h2>
      <button class="btn btn-gold" onclick="toggleAddForm()">+ Добавить услугу</button>
    </div>

    <!-- Форма добавления новой услуги (скрыта по умолчанию) -->
    <div id="add-service-form" class="card" style="display:none;">
      <h3>Новая услуга</h3>
      <form method="post" action="admin.php?action=add_service" enctype="multipart/form-data">
        <input type="hidden" name="csrf" value="<?=csrfToken()?>">
        <div class="form-row">
          <div class="form-group">
            <label>ID (латиница, уникальный)</label>
            <input type="text" name="new_id" required placeholder="Например: remont">
          </div>
          <div class="form-group">
            <label>Название</label>
            <input type="text" name="new_title" required placeholder="Например: Ремонт и отделка">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Цена за м² (₽)</label>
            <input type="number" name="new_pricePerM2" required value="0">
          </div>
          <div class="form-group">
            <label>Meta Title</label>
            <input type="text" name="new_metaTitle">
          </div>
        </div>
        <div class="form-group">
          <label>Описание</label>
          <textarea name="new_description" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label>Преимущества (каждое с новой строки)</label>
          <textarea name="new_advantages" rows="3" placeholder="Преимущество 1&#10;Преимущество 2"></textarea>
        </div>
        <div class="form-group">
          <label>Изображение</label>
          <input type="file" name="new_image" accept="image/jpeg,image/png,image/webp">
        </div>
        <div class="form-group">
          <label>Meta Description</label>
          <input type="text" name="new_metaDesc">
        </div>
        <div class="mt-16">
          <button type="submit" class="btn btn-gold">Добавить услугу</button>
          <button type="button" class="btn btn-outline" onclick="toggleAddForm()">Отмена</button>
        </div>
      </form>
    </div>

    <script>
    function toggleAddForm() {
      var el = document.getElementById('add-service-form');
      el.style.display = el.style.display === 'none' ? 'block' : 'none';
    }
    </script>

    <?php foreach ($services as $s): ?>
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <h3 style="margin:0;"><?=htmlspecialchars($s['title'])?> <span style="font-size:13px;color:#B5A08C;">(ID: <?=htmlspecialchars($s['id'])?>)</span></h3>
        <a href="admin.php?action=delete_service&id=<?=urlencode($s['id'])?>&csrf=<?=csrfToken()?>" class="btn btn-danger btn-sm" onclick="return confirm('Удалить услугу «<?=htmlspecialchars($s['title'], ENT_QUOTES)?>»?')">Удалить</a>
      </div>
      <form method="post" action="admin.php?action=save_service" enctype="multipart/form-data">
        <input type="hidden" name="csrf" value="<?=csrfToken()?>">
        <input type="hidden" name="id" value="<?=htmlspecialchars($s['id'])?>">

        <div class="form-row">
          <div class="form-group">
            <label>Название</label>
            <input type="text" name="title" value="<?=htmlspecialchars($s['title'])?>" required>
          </div>
          <div class="form-group">
            <label>Цена за м² (₽)</label>
            <input type="number" name="pricePerM2" value="<?=$s['pricePerM2']?>" required>
          </div>
        </div>

        <div class="form-group">
          <label>Описание</label>
          <textarea name="description" rows="4"><?=htmlspecialchars($s['description'])?></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Meta Title</label>
            <input type="text" name="metaTitle" value="<?=htmlspecialchars($s['metaTitle']??'')?>">
          </div>
          <div class="form-group">
            <label>Meta Description</label>
            <input type="text" name="metaDesc" value="<?=htmlspecialchars($s['metaDesc']??'')?>">
          </div>
        </div>

        <div class="form-group">
          <label>Преимущества (каждое с новой строки)</label>
          <textarea name="advantages" rows="5"><?=htmlspecialchars(implode("\n", $s['advantages'] ?? []))?></textarea>
        </div>

        <div class="form-group">
          <label>Изображение услуги</label>
          <input type="file" name="image" accept="image/jpeg,image/png,image/webp">
          <?php if (!empty($s['image'])): ?>
            <div style="margin-top:8px;"><img src="<?=$s['image']?>" style="max-width:150px;max-height:80px;border-radius:4px;border:1px solid #473928;"></div>
          <?php endif; ?>
        </div>

        <div class="mt-16">
          <button type="submit" class="btn btn-gold">Сохранить</button>
        </div>
      </form>
    </div>
    <?php endforeach; ?>

  <!-- ==================== ЦЕНЫ КАЛЬКУЛЯТОРА ==================== -->
  <?php elseif ($action === 'prices'): $services = jsonRead(DATA_DIR . '/services.json'); ?>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:24px;">
      <h2 style="border:none;padding:0;margin:0;">Цены калькулятора</h2>
      <button class="btn btn-gold" onclick="togglePriceAddForm()">+ Добавить услугу</button>
    </div>
    <p style="color:#B5A08C;font-size:14px;margin-bottom:24px;">Редактируйте цены за м² для каждой услуги. Изменения сразу отображаются в калькуляторе на сайте.</p>

    <!-- Форма добавления услуги из раздела цен -->
    <div id="price-add-form" class="card" style="display:none;">
      <h3>Новая услуга</h3>
      <form method="post" action="admin.php?action=add_service" enctype="multipart/form-data">
        <input type="hidden" name="csrf" value="<?=csrfToken()?>">
        <div class="form-row">
          <div class="form-group">
            <label>ID (латиница, уникальный)</label>
            <input type="text" name="new_id" required placeholder="Например: remont">
          </div>
          <div class="form-group">
            <label>Название</label>
            <input type="text" name="new_title" required placeholder="Например: Ремонт и отделка">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Цена за м² (₽)</label>
            <input type="number" name="new_pricePerM2" required value="0">
          </div>
          <div class="form-group">
            <label>Meta Title</label>
            <input type="text" name="new_metaTitle">
          </div>
        </div>
        <div class="form-group">
          <label>Описание</label>
          <textarea name="new_description" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label>Преимущества (каждое с новой строки)</label>
          <textarea name="new_advantages" rows="3" placeholder="Преимущество 1&#10;Преимущество 2"></textarea>
        </div>
        <div class="form-group">
          <label>Изображение</label>
          <input type="file" name="new_image" accept="image/jpeg,image/png,image/webp">
        </div>
        <div class="form-group">
          <label>Meta Description</label>
          <input type="text" name="new_metaDesc">
        </div>
        <div class="mt-16">
          <button type="submit" class="btn btn-gold">Добавить услугу</button>
          <button type="button" class="btn btn-outline" onclick="togglePriceAddForm()">Отмена</button>
        </div>
      </form>
    </div>

    <script>
    function togglePriceAddForm() {
      var el = document.getElementById('price-add-form');
      el.style.display = el.style.display === 'none' ? 'block' : 'none';
    }
    </script>

    <div class="card">
    <form method="post" action="admin.php?action=save_prices">
      <input type="hidden" name="csrf" value="<?=csrfToken()?>">
      <table>
        <thead>
          <tr>
            <th>Услуга</th>
            <th>Текущая цена (₽/м²)</th>
            <th>Новая цена (₽/м²)</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($services as $s): ?>
          <tr>
            <td><strong><?=htmlspecialchars($s['title'])?></strong></td>
            <td style="color:#CFA159;"><?=number_format($s['pricePerM2'], 0, '.', ' ')?> ₽</td>
            <td style="width:200px;">
              <input type="number" name="price[<?=htmlspecialchars($s['id'])?>]" value="<?=$s['pricePerM2']?>" style="width:100%;padding:10px 14px;border:1px solid #473928;border-radius:6px;background:#12100E;color:#E8DDD0;font-size:15px;">
            </td>
            <td>
              <a href="admin.php?action=delete_service&id=<?=urlencode($s['id'])?>&csrf=<?=csrfToken()?>" class="btn btn-danger btn-sm" onclick="return confirm('Удалить услугу «<?=htmlspecialchars($s['title'], ENT_QUOTES)?>»?')">Удалить</a>
            </td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
      <div class="mt-16">
        <button type="submit" class="btn btn-gold">Сохранить все цены</button>
      </div>
    </form>
    </div>

  <!-- ==================== ПРОЦЕСС ==================== -->
  <?php elseif ($action === 'process'): $process = jsonRead(DATA_DIR . '/process.json'); ?>
    <h2>Процесс строительства</h2>
    <div class="card">
    <form method="post" action="admin.php?action=save_process" enctype="multipart/form-data">
      <input type="hidden" name="csrf" value="<?=csrfToken()?>">

      <div class="form-group">
        <label>Описание блока</label>
        <textarea name="description" rows="3"><?=htmlspecialchars($process['description'])?></textarea>
      </div>

      <h3 style="color:#CFA159;font-size:16px;margin:24px 0 12px;">Этапы строительства</h3>
      <div id="steps-container">
        <?php foreach ($process['steps'] as $si => $step): ?>
        <div class="form-row" style="margin-bottom:12px;">
          <div class="form-group">
            <label>Название этапа</label>
            <input type="text" name="step_title[]" value="<?=htmlspecialchars($step['title'])?>" required>
          </div>
          <div class="form-group">
            <label>Описание этапа</label>
            <input type="text" name="step_desc[]" value="<?=htmlspecialchars($step['description'])?>" required>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
      <button type="button" class="btn btn-outline btn-sm mb-16" onclick="addStep()">+ Добавить этап</button>
      <div class="mt-16">
        <button type="submit" class="btn btn-gold">Сохранить процесс</button>
      </div>
    </form>
    </div>
    <script>
    function addStep() {
      var c = document.getElementById('steps-container');
      var row = document.createElement('div');
      row.className = 'form-row';
      row.style.marginBottom = '12px';
      row.innerHTML = '<div class="form-group"><label>Название этапа</label><input type="text" name="step_title[]" required></div>' +
        '<div class="form-group"><label>Описание этапа</label><input type="text" name="step_desc[]" required></div>';
      c.appendChild(row);
    }
    </script>

  <!-- ==================== ГАЛЕРЕЯ ==================== -->
  <?php elseif ($action === 'gallery'): $galleryData = jsonRead(DATA_DIR . '/gallery.json'); $items = $galleryData['items'] ?? []; ?>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:24px;">
      <h2 style="border:none;padding:0;margin:0;">Галерея работ</h2>
      <button class="btn btn-gold" onclick="document.getElementById('upload-form').style.display='block'">+ Загрузить новое фото</button>
    </div>

    <div id="upload-form" class="card" style="display:none;">
      <h3>Загрузить новые фото</h3>
      <form method="post" action="admin.php?action=gallery_upload" enctype="multipart/form-data">
        <input type="hidden" name="csrf" value="<?=csrfToken()?>">
        <div class="form-group">
          <label>Выберите изображения (JPG, PNG, WEBP, до 5 МБ, можно несколько)</label>
          <input type="file" name="gallery_files[]" multiple accept="image/jpeg,image/png,image/webp" required>
        </div>
        <div class="form-group">
          <label>Название работы</label>
          <input type="text" name="caption" placeholder="Например: Строительство дома">
        </div>
        <div class="form-group">
          <label>Описание работы</label>
          <textarea name="description" rows="3" placeholder="Подробное описание работы..."></textarea>
        </div>
        <div class="mt-16">
          <button type="submit" class="btn btn-gold">Загрузить</button>
          <button type="button" class="btn btn-outline" onclick="document.getElementById('upload-form').style.display='none'">Отмена</button>
        </div>
      </form>
    </div>

    <?php if (empty($items)): ?>
      <div class="card" style="text-align:center;padding:60px 20px;">
        <p style="color:#B5A08C;font-size:16px;">Фотографии пока не добавлены. Нажмите «Загрузить новое фото», чтобы начать.</p>
      </div>
    <?php else: ?>
      <?php foreach ($items as $item):
        $images = $item['images'] ?? [$item['image'] ?? ''];
        $firstImg = $images[0] ?? '';
      ?>
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
          <h3 style="margin:0;font-size:16px;color:#CFA159;"><?=htmlspecialchars($item['caption'] ?? 'Без названия')?> <span style="font-size:12px;color:#B5A08C;">(ID: <?=htmlspecialchars($item['id'])?>)</span></h3>
          <a href="admin.php?action=gallery_delete&id=<?=urlencode($item['id'])?>&csrf=<?=csrfToken()?>" class="btn btn-danger btn-sm" onclick="return confirm('Удалить всю работу и все её фото?')">Удалить работу</a>
        </div>

        <form method="post" action="admin.php?action=gallery_edit">
          <input type="hidden" name="csrf" value="<?=csrfToken()?>">
          <input type="hidden" name="id" value="<?=htmlspecialchars($item['id'])?>">
          <div class="form-row">
            <div class="form-group">
              <label>Название</label>
              <input type="text" name="caption" value="<?=htmlspecialchars($item['caption'] ?? '')?>">
            </div>
          </div>
          <div class="form-group">
            <label>Описание</label>
            <textarea name="description" rows="3"><?=htmlspecialchars($item['description'] ?? '')?></textarea>
          </div>
          <button type="submit" class="btn btn-gold btn-sm">Сохранить название и описание</button>
        </form>

        <div style="margin-top:16px;">
          <label style="font-size:13px;color:#A58E7A;display:block;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.06em;">Фотографии (<?=count($images)?> шт.)</label>
          <div class="admin-gallery">
            <?php foreach ($images as $gi => $img): ?>
            <div class="admin-gallery-item">
              <img src="<?=htmlspecialchars($img)?>" alt="" style="height:100px;">
              <div class="g-actions">
                <a href="admin.php?action=gallery_delete_image&id=<?=urlencode($item['id'])?>&idx=<?=$gi?>&csrf=<?=csrfToken()?>" class="btn btn-danger btn-sm" onclick="return confirm('Удалить это фото?')">Удалить</a>
              </div>
            </div>
            <?php endforeach; ?>
          </div>
        </div>

        <details style="margin-top:12px;cursor:pointer;">
          <summary style="font-size:13px;color:#8F7653;">+ Добавить фото к этой работе</summary>
          <form method="post" action="admin.php?action=gallery_add_images" enctype="multipart/form-data" style="margin-top:12px;">
            <input type="hidden" name="csrf" value="<?=csrfToken()?>">
            <input type="hidden" name="id" value="<?=htmlspecialchars($item['id'])?>">
            <div class="form-group">
              <input type="file" name="more_images[]" multiple accept="image/jpeg,image/png,image/webp">
            </div>
            <button type="submit" class="btn btn-gold btn-sm">Загрузить</button>
          </form>
        </details>
      </div>
      <?php endforeach; ?>
    <?php endif; ?>

  <!-- ==================== НАСТРОЙКИ ==================== -->
  <?php elseif ($action === 'settings'): $settings = jsonRead(DATA_DIR . '/settings.json'); ?>
    <h2>Настройки сайта</h2>
    <div class="card">
    <form method="post" action="admin.php?action=save_settings">
      <input type="hidden" name="csrf" value="<?=csrfToken()?>">

      <div class="form-row">
        <div class="form-group">
          <label>Название компании</label>
          <input type="text" name="companyName" value="<?=htmlspecialchars($settings['companyName'])?>" required>
        </div>
        <div class="form-group">
          <label>Телефон</label>
          <input type="text" name="phone" value="<?=htmlspecialchars($settings['phone'])?>" required>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Email</label>
          <input type="email" name="email" value="<?=htmlspecialchars($settings['email'])?>" required>
        </div>
        <div class="form-group">
          <label>Адрес</label>
          <input type="text" name="address" value="<?=htmlspecialchars($settings['address'])?>" required>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>VK</label>
          <input type="url" name="vk" value="<?=htmlspecialchars($settings['vk'])?>">
        </div>
        <div class="form-group">
          <label>Telegram</label>
          <input type="url" name="telegram" value="<?=htmlspecialchars($settings['telegram'])?>">
        </div>
      </div>

      <div class="form-group">
        <label>Ссылка на Яндекс.Карты</label>
        <input type="url" name="mapLink" value="<?=htmlspecialchars($settings['mapLink'])?>">
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>OG Image (URL)</label>
          <input type="url" name="ogImage" value="<?=htmlspecialchars($settings['ogImage'])?>">
        </div>
        <div class="form-group">
          <label>OG Description</label>
          <input type="text" name="ogDesc" value="<?=htmlspecialchars($settings['ogDesc'])?>">
        </div>
      </div>

      <div class="mt-16">
        <button type="submit" class="btn btn-gold">Сохранить настройки</button>
      </div>
    </form>
    </div>

  <?php else: ?>
    <!-- Главная страница админки -->
    <div style="text-align:center;padding:60px 0;">
      <h2 style="border:none;padding:0;">Добро пожаловать в админ-панель</h2>
      <p style="color:#B5A08C;font-size:16px;margin-top:16px;">Используйте меню сверху для управления контентом сайта.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;max-width:600px;margin:40px auto;">
        <a href="admin.php?action=projects" style="background:#12100E;border:1px solid #473928;border-radius:8px;padding:32px 20px;text-align:center;color:#E8DDD0;">
          <div style="font-size:36px;margin-bottom:8px;">🏗️</div>
          <div style="font-weight:700;">Проекты</div>
          <div style="font-size:13px;color:#B5A08C;margin-top:4px;">Управление проектами</div>
        </a>
        <a href="admin.php?action=services" style="background:#12100E;border:1px solid #473928;border-radius:8px;padding:32px 20px;text-align:center;color:#E8DDD0;">
          <div style="font-size:36px;margin-bottom:8px;">🔧</div>
          <div style="font-weight:700;">Услуги</div>
          <div style="font-size:13px;color:#B5A08C;margin-top:4px;">Редактирование услуг</div>
        </a>
        <a href="admin.php?action=prices" style="background:#12100E;border:1px solid #473928;border-radius:8px;padding:32px 20px;text-align:center;color:#E8DDD0;">
          <div style="font-size:36px;margin-bottom:8px;">💰</div>
          <div style="font-weight:700;">Цены</div>
          <div style="font-size:13px;color:#B5A08C;margin-top:4px;">Цены калькулятора</div>
        </a>
        <a href="admin.php?action=gallery" style="background:#12100E;border:1px solid #473928;border-radius:8px;padding:32px 20px;text-align:center;color:#E8DDD0;">
          <div style="font-size:36px;margin-bottom:8px;">🖼️</div>
          <div style="font-weight:700;">Галерея работ</div>
          <div style="font-size:13px;color:#B5A08C;margin-top:4px;">Фото работ</div>
        </a>
        <a href="admin.php?action=settings" style="background:#12100E;border:1px solid #473928;border-radius:8px;padding:32px 20px;text-align:center;color:#E8DDD0;">
          <div style="font-size:36px;margin-bottom:8px;">⚙️</div>
          <div style="font-weight:700;">Настройки</div>
          <div style="font-size:13px;color:#B5A08C;margin-top:4px;">Контакты и SEO</div>
        </a>
      </div>
    </div>
  <?php endif; ?>
</div>

</body>
</html>
