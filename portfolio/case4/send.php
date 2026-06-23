<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $to = "vi.cattleya25@gmail.com";
    $subject = "Новая заявка с сайта bureauoftalents.ru";
    
    // Собираем текст письма
    $message = "";
    foreach ($_POST as $key => $value) {
        if ($key == 'guide') continue;
        $label = ucfirst(str_replace('_', ' ', $key));
        $val = strip_tags(trim($value));
        $message .= "$label: $val\n";
    }
    
    // Заголовки письма: обязательно с указанием UTF-8 и обратным адресом
    $headers = "From: info@bureauoftalents.ru\r\n";
    $headers .= "Reply-To: " . (isset($_POST['email']) ? $_POST['email'] : $to) . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Отправка с дополнительным параметром -f (для Beget)
    $mail_sent = mail($to, $subject, $message, $headers, "-finfo@bureauoftalents.ru");
    
    // Обработка ответа для фронта
    if (isset($_POST['guide'])) {
        // Для гайда – JSON ответ
        header('Content-Type: application/json; charset=utf-8');
        if ($mail_sent) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Ошибка отправки. Проверьте логи почты.']);
        }
        exit;
    } else {
        // Для обычной формы – HTML с alert и перенаправлением
        header('Content-Type: text/html; charset=utf-8');
        if ($mail_sent) {
            echo "<script>alert('Спасибо! ✅ Заявка отправлена! Мы свяжемся с вами.'); window.location.href = '/';</script>";
        } else {
            echo "<script>alert('❌ Ошибка отправки. Попробуйте позже или напишите нам: vi.cattleya25@gmail.com'); window.location.href = '/';</script>";
        }
        exit;
    }
} else {
    // Если кто-то зашёл напрямую
    header('Content-Type: text/html; charset=utf-8');
    echo "Метод не разрешен";
}
?>