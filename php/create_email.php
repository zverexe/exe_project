<?php
require 'scripts/database_connection_exe.php';



$email = trim($_REQUEST['email']);

$insert_sql =
"INSERT INTO newsletter (email)
" .
"VALUES ('{$email}');";
// Вставка данных о пользователе в базу данных
mysql_query($insert_sql)
or die(mysql_error());

header("Location: show_form.php?id=" . mysql_insert_id());
exit();
?>