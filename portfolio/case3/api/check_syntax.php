<?php
// Проверяем синтаксис текущего catalog.php
$output = shell_exec('php -l /home/a/artemsi9/i-foods/public_html/api/catalog.php 2>&1');
echo "<pre>Синтаксическая проверка catalog.php:\n" . htmlspecialchars($output) . "</pre>";

// Проверяем, что файл config.php загружается без ошибок
echo "<h3>Проверка config.php:</h3>";
try {
    require_once __DIR__ . '/config.php';
    echo "✅ config.php загружен! Константы определены.<br>";
    echo "DATA_DIR: " . DATA_DIR . "<br>";
    echo "CATALOG_FILE: " . CATALOG_FILE . "<br>";
} catch (Throwable $e) {
    echo "❌ Ошибка в config.php: " . $e->getMessage() . "<br>";
    echo "В строке: " . $e->getLine() . "<br>";
}