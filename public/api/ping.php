<?php
/**
 * Quick health check: open /api/ping.php in a browser.
 * Confirms PHP is running for the API folder.
 */
header('Content-Type: application/json; charset=utf-8');
echo json_encode(array(
    'ok' => true,
    'php' => PHP_VERSION,
    'mail' => function_exists('mail'),
    'time' => date('c'),
));
