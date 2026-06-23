<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// CORS
function handle_preflight() {
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Max-Age: 86400');
        http_response_code(204);
        exit;
    }
}

function allow_cors() {
    header('Access-Control-Allow-Origin: *');
}

// Ответы
function send_json($code, $data) {
    http_response_code($code);
    header('Content-Type: application/json');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

// Админ-токен (заглушка)
function require_admin_token() {
    // TODO: добавить проверку авторизации
    return true;
}

// Константы
define('MAX_CATALOG_BYTES', 5 * 1024 * 1024); // 5 MB
define('DATA_DIR', __DIR__ . '/../data/');
define('CATALOG_FILE', DATA_DIR . 'catalog.json');

// Чтение каталога
function read_catalog() {
    if (!file_exists(CATALOG_FILE)) {
        return array('items' => array(), 'updatedAt' => date('c'));
    }
    $content = file_get_contents(CATALOG_FILE);
    $data = json_decode($content, true);
    if (!is_array($data)) {
        return array('items' => array(), 'updatedAt' => date('c'));
    }
    return $data;
}

function catalog_for_json($catalog) {
    return $catalog;
}

function normalize_catalog($decoded) {
    if (!isset($decoded['items']) || !is_array($decoded['items'])) {
        $decoded['items'] = array();
    }
    $decoded['updatedAt'] = date('c');
    return $decoded;
}

function write_catalog_file($catalog) {
    if (!is_dir(DATA_DIR)) {
        mkdir(DATA_DIR, 0755, true);
    }
    file_put_contents(CATALOG_FILE, json_encode($catalog, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}