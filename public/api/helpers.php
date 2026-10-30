<?php
/**
 * Shared helpers for Royal Express form mailers.
 * Compatible with PHP 7.4+
 */

error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

define('MAIL_TO', 'team@royalexpressllc.com');
define('MAIL_FROM', 'team@royalexpressllc.com');
define('MAIL_FROM_NAME', 'Royal Express LLC Website');

set_exception_handler(function ($e) {
    http_response_code(500);
    echo json_encode(array(
        'ok' => false,
        'message' => 'Server error while processing your request. Please call (682) 407-3621.',
    ));
    exit;
});

set_error_handler(function ($severity, $message, $file, $line) {
    if (!(error_reporting() & $severity)) {
        return false;
    }
    throw new ErrorException($message, 0, $severity, $file, $line);
});

function json_response($ok, $message, $status = 200)
{
    http_response_code((int) $status);
    echo json_encode(array(
        'ok' => (bool) $ok,
        'message' => (string) $message,
    ));
    exit;
}

function read_json_body()
{
    $raw = file_get_contents('php://input');
    if ($raw === false || trim($raw) === '') {
        return !empty($_POST) ? $_POST : array();
    }

    $data = json_decode($raw, true);
    if (!is_array($data)) {
        json_response(false, 'Invalid request payload.', 400);
    }

    return $data;
}

function clean($value, $preserveNewlines = false)
{
    if (is_bool($value) || is_array($value) || is_object($value) || $value === null) {
        return '';
    }

    $value = trim((string) $value);
    $value = strip_tags($value);

    if ($preserveNewlines) {
        $value = preg_replace("/\r\n?/", "\n", $value);
        $value = preg_replace("/[^\S\n]+/u", ' ', $value);
        return trim($value);
    }

    return trim(preg_replace('/\s+/u', ' ', $value));
}

function require_fields($data, $fields)
{
    foreach ($fields as $field) {
        if (clean(isset($data[$field]) ? $data[$field] : '') === '') {
            json_response(false, 'Please fill in all required fields.', 422);
        }
    }
}

function escape_html($value)
{
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

function sanitize_header_value($value)
{
    $value = clean($value);
    $value = str_replace(array("\r", "\n", "%0a", "%0d"), '', $value);
    return $value;
}

function email_row($label, $value)
{
    $display = $value !== ''
        ? nl2br(escape_html($value))
        : '—';

    return '
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #e4e8f0;font-size:13px;color:#5a6880;width:38%;font-weight:600;vertical-align:top;">'
        . escape_html($label) .
        '</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e4e8f0;font-size:14px;color:#0c1a38;font-weight:700;vertical-align:top;">'
        . $display .
        '</td>
      </tr>';
}

function build_email_html($title, $subtitle, $rowsHtml, $footerNote = '')
{
    $year = date('Y');
    $note = $footerNote !== ''
        ? '<p style="margin:0 0 8px;font-size:13px;color:#5a6880;line-height:1.5;">' . escape_html($footerNote) . '</p>'
        : '';

    return '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>' . escape_html($title) . '</title>
</head>
<body style="margin:0;padding:0;background:#f0f2f7;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f7;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e4e8f0;">
          <tr>
            <td style="background:#040914;padding:28px 28px 22px;">
              <div style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#E51B24;font-weight:700;margin-bottom:8px;">Royal Express LLC</div>
              <h1 style="margin:0;font-size:24px;line-height:1.25;color:#ffffff;font-weight:800;">' . escape_html($title) . '</h1>
              <p style="margin:10px 0 0;font-size:14px;line-height:1.5;color:#a8b4c8;">' . escape_html($subtitle) . '</p>
            </td>
          </tr>
          <tr>
            <td style="height:4px;background:#E51B24;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:8px 14px 6px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e4e8f0;border-radius:10px;overflow:hidden;">
                ' . $rowsHtml . '
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 28px 26px;">
              ' . $note . '
              <p style="margin:0;font-size:12px;color:#7d8fa8;line-height:1.5;">
                Submitted from the Royal Express website on ' . escape_html(date('F j, Y \a\t g:i A T')) . '.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#040914;padding:16px 28px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#7d8fa8;">
                &copy; ' . $year . ' Royal Express LLC · team@royalexpressllc.com · (682) 407-3621
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>';
}

function send_html_mail($subject, $html, $replyTo = '', $replyName = '')
{
    $subject = sanitize_header_value($subject);
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

    $fromName = sanitize_header_value(MAIL_FROM_NAME);
    $fromEmail = MAIL_FROM;
    $fromHeader = $fromName . ' <' . $fromEmail . '>';

    $headers = array();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/html; charset=UTF-8';
    $headers[] = 'From: ' . $fromHeader;
    $headers[] = 'Sender: ' . $fromEmail;
    $headers[] = 'X-Mailer: PHP/' . phpversion();

    $replyTo = sanitize_header_value($replyTo);
    $replyName = sanitize_header_value($replyName);

    if ($replyTo !== '' && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
        if ($replyName !== '') {
            $headers[] = 'Reply-To: ' . $replyName . ' <' . $replyTo . '>';
        } else {
            $headers[] = 'Reply-To: ' . $replyTo;
        }
    }

    $headerString = implode("\r\n", $headers);

    // Envelope sender helps many shared hosts accept the message.
    $params = '-f' . $fromEmail;

    $sent = @mail(MAIL_TO, $encodedSubject, $html, $headerString, $params);

    // Fallback without envelope sender if host blocks -f
    if (!$sent) {
        $sent = @mail(MAIL_TO, $encodedSubject, $html, $headerString);
    }

    return (bool) $sent;
}
