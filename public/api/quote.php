<?php
/**
 * Freight quote request endpoint.
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
    'companyName',
    'contactName',
    'phone',
    'email',
    'pickup',
    'delivery',
    'commodity',
));

$email = clean(isset($data['email']) ? $data['email'] : '');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_response(false, 'Please enter a valid email address.', 422);
}

$companyName = clean(isset($data['companyName']) ? $data['companyName'] : '');
$contactName = clean(isset($data['contactName']) ? $data['contactName'] : '');
$phone = clean(isset($data['phone']) ? $data['phone'] : '');
$pickup = clean(isset($data['pickup']) ? $data['pickup'] : '');
$delivery = clean(isset($data['delivery']) ? $data['delivery'] : '');
$commodity = clean(isset($data['commodity']) ? $data['commodity'] : '');
$temperature = clean(isset($data['temperature']) ? $data['temperature'] : '');
$weight = clean(isset($data['weight']) ? $data['weight'] : '');
$serviceType = clean(isset($data['serviceType']) ? $data['serviceType'] : '');
$notes = clean(isset($data['notes']) ? $data['notes'] : '', true);
$source = clean(isset($data['source']) ? $data['source'] : 'Website Quote Form');

$rows = email_row('Company', $companyName)
    . email_row('Contact Name', $contactName)
    . email_row('Phone', $phone)
    . email_row('Email', $email)
    . email_row('Pickup', $pickup)
    . email_row('Delivery', $delivery)
    . email_row('Commodity', $commodity)
    . email_row('Temperature', $temperature)
    . email_row('Est. Weight (lbs)', $weight)
    . email_row('Service Type', $serviceType)
    . email_row('Additional Notes', $notes)
    . email_row('Source', $source);

$html = build_email_html(
    'New Freight Quote Request',
    $companyName . ' requested a quote for ' . $pickup . ' to ' . $delivery . '.',
    $rows,
    'Reply directly to this email to reach the shipper.'
);

$subject = 'Quote Request: ' . $companyName . ' - ' . $pickup . ' to ' . $delivery;

if (!send_html_mail($subject, $html, $email, $contactName)) {
    json_response(false, 'Unable to send your request right now. Please call (682) 407-3621 or email team@royalexpressllc.com.', 500);
}

json_response(true, 'Quote request sent successfully.');
