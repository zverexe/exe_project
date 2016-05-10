<?php
require 'scripts/database_connection_exe.php';


$id = $_REQUEST['id'];

$select_query = "SELECT * FROM newsletter WHERE id = " . $id;
// Запуск запроса
$result = mysql_query($select_query);
// Присваивание значений переменным
if ($result) {
	$row = mysql_fetch_array($result);
$email = $row['email'];
}else {
die("Ошибка обнаружения пользователя с ID {$id}");
}
?>
<html>
<head>
<meta charset = "utf8">
<style>
@font-face {
    font-family: "RalewayRegular";
    src: url('../fonts/Raleway-Regular.ttf');
    font-weight: 400;
}
body{
text-align: center;
height: 254px;
background-image: url(../images/polygon.png);
}
.wrapper{
	width: 1170px;
margin: auto;
font-family: 'RalewayRegular';
font-size: 20px;
color: #363636;
}
</style>
</head>
<body>
<div id="content">
<div class="wrapper">
<h1>Congratulations! Your email <?php echo $email; ?> is subscribed to our newsletters</h1>
</div>
</div>
<div id="footer"></div>
</body>