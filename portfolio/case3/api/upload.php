<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';

handle_preflight();
allow_cors();

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    send_json(405, ['error' => 'method_not_allowed']);
}

require_admin_token();
ensure_storage();

if (isset($_FILES['video']) && is_array($_FILES['video'])) {
    handle_video_upload($_FILES['video']);
}

if (isset($_FILES['image']) && is_array($_FILES['image'])) {
    handle_image_upload($_FILES['image']);
}

send_json(400, ['error' => 'missing_file']);

function handle_uploaded_file(array $file, int $maxBytes, array $allowed, string $namePrefix): void
{
    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
        send_json(400, ['error' => 'upload_failed']);
    }

    if (($file['size'] ?? 0) > $maxBytes) {
        send_json(413, ['error' => 'file_too_large']);
    }

    $tmpName = $file['tmp_name'] ?? '';
    if (!is_uploaded_file($tmpName)) {
        send_json(400, ['error' => 'invalid_upload']);
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($tmpName) ?: '';
    $extension = null;

    if (isset($allowed[$mime])) {
        $extension = $allowed[$mime];
    } else {
        $nameExtension = strtolower(pathinfo((string)($file['name'] ?? ''), PATHINFO_EXTENSION));
        if ($nameExtension !== '' && in_array($nameExtension, $allowed, true)) {
            $extension = $nameExtension;
        }
    }

    if ($extension === null) {
        send_json(400, ['error' => 'unsupported_type']);
    }

    $filename = $namePrefix . gmdate('Ymd-His') . '-' . bin2hex(random_bytes(4)) . '.' . $extension;
    $targetPath = UPLOADS_DIR . '/' . $filename;

    if (!move_uploaded_file($tmpName, $targetPath)) {
        send_json(500, ['error' => 'save_failed']);
    }

    send_json(200, [
        'ok' => true,
        'url' => './uploads/' . $filename,
        'kind' => str_starts_with($namePrefix, 'ifoods-video') ? 'video' : 'image',
    ]);
}

function handle_image_upload(array $file): void
{
    handle_uploaded_file($file, MAX_UPLOAD_BYTES, [
        'image/jpeg' => 'jpg',
        'image/png' => 'png',
        'image/webp' => 'webp',
        'image/gif' => 'gif',
    ], 'ifoods-');
}

function handle_video_upload(array $file): void
{
    handle_uploaded_file($file, MAX_VIDEO_UPLOAD_BYTES, [
        'video/mp4' => 'mp4',
        'video/webm' => 'webm',
        'video/quicktime' => 'mov',
    ], 'ifoods-video-');
}
