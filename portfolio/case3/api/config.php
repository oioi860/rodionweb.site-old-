<?php
declare(strict_types=1);

const ADMIN_TOKEN = 'e59555fb1a002e240a3c75271d698ceb14a3786984e34f601aeeafeebd10fd61';
const DATA_DIR = __DIR__ . '/../data';
const CATALOG_FILE = DATA_DIR . '/catalog.json';
const UPLOADS_DIR = __DIR__ . '/../uploads';
const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
const MAX_VIDEO_UPLOAD_BYTES = 50 * 1024 * 1024;
const MAX_CATALOG_BYTES = 12 * 1024 * 1024;

function send_json(int $status, array $payload): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store, no-cache, must-revalidate');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function allow_cors(): void
{
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, X-Admin-Token');
}

function handle_preflight(): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        allow_cors();
        http_response_code(204);
        exit;
    }
}

function ensure_storage(): void
{
    if (!is_dir(DATA_DIR) && !mkdir(DATA_DIR, 0755, true) && !is_dir(DATA_DIR)) {
        send_json(500, ['error' => 'storage_unavailable']);
    }

    if (!is_dir(UPLOADS_DIR) && !mkdir(UPLOADS_DIR, 0755, true) && !is_dir(UPLOADS_DIR)) {
        send_json(500, ['error' => 'storage_unavailable']);
    }
}

function default_catalog(): array
{
    return [
        'overrides' => [],
        'customProducts' => [],
        'featuredProductId' => '',
        'categories' => [],
        'bundles' => [],
        'hero' => [],
        'about' => [],
        'moments' => [],
        'updatedAt' => gmdate('c'),
    ];
}

function sanitize_category_item(array $item, int $index): array
{
    $id = isset($item['id']) && is_string($item['id']) && trim($item['id']) !== ''
        ? trim($item['id'])
        : 'category-' . ($index + 1);

    return [
        'id' => $id,
        'label' => isset($item['label']) && is_string($item['label']) ? trim($item['label']) : 'Категория',
        'description' => isset($item['description']) && is_string($item['description']) ? $item['description'] : '',
        'image' => isset($item['image']) && is_string($item['image']) ? trim($item['image']) : '',
        'order' => isset($item['order']) && is_numeric($item['order']) ? max(0, (int)$item['order']) : ($index + 1),
        'isVisible' => !array_key_exists('isVisible', $item) || (bool)$item['isVisible'],
        'tone' => isset($item['tone']) && is_string($item['tone']) ? $item['tone'] : 'aqua',
        'filterId' => isset($item['filterId']) && is_string($item['filterId']) ? $item['filterId'] : $id,
    ];
}

function sanitize_bundle_item(array $item, int $index): array
{
    $id = isset($item['id']) && is_string($item['id']) && trim($item['id']) !== ''
        ? trim($item['id'])
        : 'bundle-' . ($index + 1);

    $productIds = [];
    if (isset($item['productIds']) && is_array($item['productIds'])) {
        foreach ($item['productIds'] as $productId) {
            if (is_string($productId) && trim($productId) !== '') {
                $productIds[] = trim($productId);
            }
        }
    }

    $image = isset($item['image']) && is_string($item['image']) ? trim($item['image']) : '';
    $imageSecondary = isset($item['imageSecondary']) && is_string($item['imageSecondary']) && trim($item['imageSecondary']) !== ''
        ? trim($item['imageSecondary'])
        : ($image !== '' ? './изображения/ifoods-pack-leningrad-cake-front.jpg' : '');

    return [
        'id' => $id,
        'name' => isset($item['name']) && is_string($item['name']) ? trim($item['name']) : 'Набор',
        'description' => isset($item['description']) && is_string($item['description']) ? $item['description'] : '',
        'image' => $image,
        'imageSecondary' => $imageSecondary,
        'productIds' => $productIds,
        'isVisible' => !array_key_exists('isVisible', $item) || (bool)$item['isVisible'],
    ];
}

function sanitize_hero(array $item): array
{
    return [
        'topTitle' => isset($item['topTitle']) && is_string($item['topTitle']) ? trim($item['topTitle']) : 'Десерты нового поколения',
        'topSubtitle' => isset($item['topSubtitle']) && is_string($item['topSubtitle']) ? $item['topSubtitle'] : 'Зефир, пирожные и наборы для дома, к чаю и в подарок',
        'topText' => isset($item['topText']) && is_string($item['topText']) ? $item['topText'] : '',
        'stageLabel' => isset($item['stageLabel']) && is_string($item['stageLabel']) ? trim($item['stageLabel']) : 'I-FOODS',
        'stageTitle' => isset($item['stageTitle']) && is_string($item['stageTitle']) ? trim($item['stageTitle']) : '',
        'stageSubtitle' => isset($item['stageSubtitle']) && is_string($item['stageSubtitle']) ? $item['stageSubtitle'] : '',
        'videoUrl' => isset($item['videoUrl']) && is_string($item['videoUrl']) ? trim($item['videoUrl']) : './Видео/IMG_8089.mp4',
    ];
}

function sanitize_about_image(array $item, string $fallbackSrc, string $fallbackAlt): array
{
    return [
        'src' => isset($item['src']) && is_string($item['src']) && trim($item['src']) !== ''
            ? trim($item['src'])
            : $fallbackSrc,
        'alt' => isset($item['alt']) && is_string($item['alt']) ? trim($item['alt']) : $fallbackAlt,
    ];
}

function sanitize_about(array $item): array
{
    $defaults = [
        'kicker' => 'Почему I-FOODS',
        'title' => 'Десерты нового поколения, которые выглядят по-настоящему аппетитно',
        'lead' => 'I-FOODS — это не про ограничения, а про удовольствие: знакомые вкусы, аккуратная подача и коллекция, в которой легко найти десерт для себя или в подарок.',
        'principles' => [
            ['title' => 'Красиво с первого взгляда', 'text' => 'Их хочется рассмотреть ещё до первого укуса.'],
            ['title' => 'Легко выбрать', 'text' => 'Зефир, пирожные, чоколит и наборы сразу разделены по понятным коллекциям.'],
            ['title' => 'Честно и по делу', 'text' => 'Мы говорим о вкусе, весе и формате без лишних обещаний.'],
            ['title' => 'Удобно заказать', 'text' => 'Нужный десерт легко найти, добавить в корзину и собрать в набор.'],
        ],
        'images' => [
            'main' => ['src' => './изображения/ifoods-social-raspberry-velvet-square.jpg', 'alt' => 'Малиновый бархат'],
            'secondary' => ['src' => './изображения/ifoods-pack-zefir-brownie-chocolate-glaze-front.jpg', 'alt' => 'Зефир в шоколаде'],
            'tertiary' => ['src' => './изображения/ifoods-social-chocolate-velvet-square.jpg', 'alt' => 'Шоколадный бархат'],
        ],
    ];

    $principles = [];
    if (isset($item['principles']) && is_array($item['principles'])) {
        foreach (array_values($item['principles']) as $index => $principle) {
            if (!is_array($principle) || $index >= 4) {
                continue;
            }
            $fallback = $defaults['principles'][$index] ?? ['title' => 'Принцип', 'text' => ''];
            $principles[] = [
                'title' => isset($principle['title']) && is_string($principle['title']) ? trim($principle['title']) : $fallback['title'],
                'text' => isset($principle['text']) && is_string($principle['text']) ? trim($principle['text']) : $fallback['text'],
            ];
        }
    }

    while (count($principles) < 4) {
        $principles[] = $defaults['principles'][count($principles)];
    }

    $imagesInput = isset($item['images']) && is_array($item['images']) ? $item['images'] : [];
    $images = [];
    foreach (['main', 'secondary', 'tertiary'] as $key) {
        $fallback = $defaults['images'][$key];
        $image = isset($imagesInput[$key]) && is_array($imagesInput[$key]) ? $imagesInput[$key] : [];
        $images[$key] = sanitize_about_image($image, $fallback['src'], $fallback['alt']);
    }

    return [
        'kicker' => isset($item['kicker']) && is_string($item['kicker']) ? trim($item['kicker']) : $defaults['kicker'],
        'title' => isset($item['title']) && is_string($item['title']) ? trim($item['title']) : $defaults['title'],
        'lead' => isset($item['lead']) && is_string($item['lead']) ? trim($item['lead']) : $defaults['lead'],
        'principles' => $principles,
        'images' => $images,
    ];
}

function catalog_for_json(array $catalog): array
{
    return [
        'overrides' => (object)($catalog['overrides'] ?? []),
        'customProducts' => array_values($catalog['customProducts'] ?? []),
        'featuredProductId' => (string)($catalog['featuredProductId'] ?? ''),
        'categories' => array_values($catalog['categories'] ?? []),
        'bundles' => array_values($catalog['bundles'] ?? []),
        'hero' => $catalog['hero'] ?? [],
        'about' => $catalog['about'] ?? [],
        'moments' => array_values($catalog['moments'] ?? []),
        'updatedAt' => (string)($catalog['updatedAt'] ?? gmdate('c')),
    ];
}

function normalize_catalog(array $input): array
{
    $catalog = default_catalog();

    if (isset($input['overrides']) && is_array($input['overrides'])) {
        foreach ($input['overrides'] as $productId => $product) {
            if (!is_string($productId) || trim($productId) === '' || !is_array($product)) {
                continue;
            }
            $catalog['overrides'][$productId] = $product;
        }
    }

    if (isset($input['customProducts']) && is_array($input['customProducts'])) {
        foreach ($input['customProducts'] as $product) {
            if (is_array($product)) {
                $catalog['customProducts'][] = $product;
            }
        }
    }

    if (isset($input['featuredProductId']) && is_string($input['featuredProductId'])) {
        $catalog['featuredProductId'] = $input['featuredProductId'];
    }

    if (isset($input['categories']) && is_array($input['categories'])) {
        foreach (array_values($input['categories']) as $index => $category) {
            if (is_array($category)) {
                $catalog['categories'][] = sanitize_category_item($category, $index);
            }
        }
    }

    if (isset($input['bundles']) && is_array($input['bundles'])) {
        foreach (array_values($input['bundles']) as $index => $bundle) {
            if (is_array($bundle)) {
                $catalog['bundles'][] = sanitize_bundle_item($bundle, $index);
            }
        }
    }

    if (isset($input['hero']) && is_array($input['hero'])) {
        $catalog['hero'] = sanitize_hero($input['hero']);
    }

    if (isset($input['about']) && is_array($input['about'])) {
        $catalog['about'] = sanitize_about($input['about']);
    }
    
    if (isset($input['moments']) && is_array($input['moments'])) {
        $catalog['moments'] = array_values($input['moments']);
    }
    
    // Если фронт прислал storyMoments — копируем в moments (для обратной совместимости)
    if (isset($input['storyMoments']) && is_array($input['storyMoments'])) {
        $catalog['moments'] = array_values($input['storyMoments']);
    }
    
    $catalog['updatedAt'] = gmdate('c');
    return $catalog;
}

function read_catalog(): array
{
    ensure_storage();

    if (!is_file(CATALOG_FILE)) {
        $catalog = default_catalog();
        write_catalog_file($catalog);
        return $catalog;
    }

    $raw = file_get_contents(CATALOG_FILE);
    if ($raw === false || trim($raw) === '') {
        return default_catalog();
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        return default_catalog();
    }

    return normalize_catalog($decoded);
}

function write_catalog_file(array $catalog): void
{
    ensure_storage();
    $payload = json_encode(
        catalog_for_json(normalize_catalog($catalog)),
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT
    );
    if ($payload === false || strlen($payload) > MAX_CATALOG_BYTES) {
        send_json(413, ['error' => 'catalog_too_large']);
    }

    $tempFile = CATALOG_FILE . '.tmp';
    if (file_put_contents($tempFile, $payload, LOCK_EX) === false) {
        send_json(500, ['error' => 'write_failed']);
    }

    if (!rename($tempFile, CATALOG_FILE)) {
        @unlink($tempFile);
        send_json(500, ['error' => 'write_failed']);
    }
}

function require_admin_token(): void
{
    $token = $_SERVER['HTTP_X_ADMIN_TOKEN'] ?? '';
    if (!is_string($token) || !hash_equals(ADMIN_TOKEN, $token)) {
        send_json(401, ['error' => 'unauthorized']);
    }
}

function get_admin_token_from_request(): string
{
    $token = $_SERVER['HTTP_X_ADMIN_TOKEN'] ?? '';
    return is_string($token) ? $token : '';
}