<?php
require_once __DIR__ . '/libs/PHPMailer/src/Exception.php';
require_once __DIR__ . '/libs/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/libs/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Метод не разрешён']);
    exit;
}

// Антиспам
if (!empty($_POST['honeypot'])) {
    echo json_encode(['success' => true, 'message' => 'Сообщение отправлено (бот)']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');
$service = trim($_POST['service'] ?? '');
$area = trim($_POST['area'] ?? '');

if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Пожалуйста, заполните имя и телефон']);
    exit;
}

$body = "Новая заявка с сайта Берлога\n\n";
$body .= "Имя: $name\nТелефон: $phone\n";
if ($email) $body .= "Email: $email\n";
if ($service) $body .= "Услуга: $service\n";
if ($area) $body .= "Площадь: $area м²\n";
if ($message) $body .= "Сообщение: $message\n";
$body .= "\nОтправлено с сайта " . ($_SERVER['HTTP_HOST'] ?? '');

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.beget.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'new@xn--90anfugfgff1g.xn--80adxhks';
    $mail->Password = '@dmiN123';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom('new@xn--90anfugfgff1g.xn--80adxhks', 'Берлога');
    $mail->addAddress('glotoffnikolaj@yandex.ru'); // замените на почту клиента
    if ($email) {
        $mail->addReplyTo($email, $name);
    }

    $mail->Subject = 'Новая заявка с сайта Берлога';
    $mail->Body = $body;

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Спасибо! Ваша заявка отправлена.']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка при отправке. Попробуйте позже.']);
}