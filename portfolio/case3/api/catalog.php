<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . '/config.php';

handle_preflight();
allow_cors();

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($method === 'GET') {
    send_json(200, catalog_for_json(read_catalog()));
}

if ($method === 'POST') {
    require_admin_token();

    $rawBody = file_get_contents('php://input');
    if ($rawBody === false || $rawBody === '') {
        send_json(400, ['error' => 'empty_body']);
    }

    if (strlen($rawBody) > MAX_CATALOG_BYTES) {
        send_json(413, ['error' => 'catalog_too_large']);
    }

    $decoded = json_decode($rawBody, true);
    if (!is_array($decoded)) {
        send_json(400, ['error' => 'invalid_json']);
    }

    $catalog = normalize_catalog($decoded);
    write_catalog_file($catalog);
    send_json(200, ['ok' => true, 'updatedAt' => $catalog['updatedAt']]);
}

send_json(405, ['error' => 'method_not_allowed']);