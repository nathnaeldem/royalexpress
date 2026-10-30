<?php
/**
 * General contact / inquiry endpoint.
 * POST JSON or form-urlencoded → emails team@royalexpressllc.com
 */

require_once __DIR__ . '/helpers.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(false, 'Method not allowed.', 405);
}

$data = read_json_body();

require_fields($data, array(
    'name',
    'email',
    'message',
));

$email = clean(isset($data['email']) ? $data['email'] : '');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_response(false, 'Please enter a valid email address.', 422);
}

$name = clean(isset($data['name']) ? $data['name'] : '');
$phone = clean(isset($data['phone']) ? $data['phone'] : '');
$company = clean(isset($data['company']) ? $data['company'] : '');
$subjectLine = clean(isset($data['subject']) ? $data['subject'] : 'Website Contact');
$message = clean(isset($data['message']) ? $data['message'] : '', true);
$source = clean(isset($data['source']) ? $data['source'] : 'Website Contact Form');

$rows = email_row('Name', $name)
    . email_row('Email', $email)
    . email_row('Phone', $phone)
    . email_row('Company', $company)
    . email_row('Subject', $subjectLine)
    . email_row('Message', $message)
    . email_row('Source', $source);

$html = build_email_html(
    'New Contact Request',
    $name . ' sent a message from the website.',
    $rows,
    'Reply directly to this email to respond to the sender.'
);

$subject = 'Contact: ' . $subjectLine . ' - ' . $name;

if (!send_html_mail($subject, $html, $email, $name)) {
    json_response(false, 'Unable to send your message right now. Please call (682) 407-3621 or email team@royalexpressllc.com.', 500);
}

json_response(true, 'Contact request sent successfully.');
