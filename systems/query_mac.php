<?php

// проверка доступа
$input = json_decode($_POST['data'], TRUE);

if (!$input['i']) {
    header("HTTP/1.0 404 Not Found");
    exit();
}

// подключаем файлы
include_once("../config.php");
include_once("database.php");
db_connection($db_host, $db_name, $db_user, $db_pass);

// проверяем mac в БД
$mac_query = mysqli_fetch_assoc(mysqli_query($load, "SELECT *
	FROM requests WHERE mac='" . addslashes($_POST['a']) . "' LIMIT 1"));
if ($mac_query) {
    echo 1;
} else {
    echo 0;
}
?>