<?php

define("debug_mode", true);
define("site_root", "C:/wamp/www/phpMM/exe/");

define("host_www_root", "C:/wamp/www/phpMM/exe/");
define("database_host", "localhost");
define("username", "root");
define("password", "new_password");
define("database_name", "test");
function debug_print($message) {
if (debug_mode) {
echo $message;
}
}

function handle_error($user_error_message, $system_error_message) {
header("Location:  " . site_root . "scripts/show_error.php?" .
"error_message={$user_error_message}&" .
"system_error_message={$system_error_message}");
exit();
}


function get_web_path($file_system_path) {
return str_replace($_SERVER['DOCUMENT_ROOT'], '', $file_system_path);
}

?>