<?php
header('Content-Type: text/html; charset=utf-8');
require 'app_config_exe.php';

mysqli_connect(database_host, username, password)
or die("<p>Ошибка подключения к базе данных: " .
mysql_error() . "</p>");
"<p>Вы подключились к MySQL!</p>";
mysql_select_db(database_name)
or die("<p>Ошибка при выборе базы данных " .
database_name . mysql_error() . "</p>");
"<p>Вы подключены к MySQL с использованием базы данных " .
database_name . ".</p>";
?>