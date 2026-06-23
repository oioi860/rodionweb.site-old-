<?php

header('Content-Type: application/json');

$data = file_get_contents("php://input");

if (!$data) {
    echo json_encode([
        "success" => false,
        "message" => "Нет данных"
    ]);
    exit;
}

$file = __DIR__ . '/data/site-data.json';

file_put_contents($file, $data);

echo json_encode([
    "success" => true
]);