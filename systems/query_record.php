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

// City
if (mb_strlen($input['a'], 'UTF-8') === 0) {
    exit("Заполните поле - City!");
}
// ATS
if (mb_strlen($input['b'], 'UTF-8') === 0) {
    exit("Заполните поле - ATS!");
}
// Equipment type
if (mb_strlen($input['c'], 'UTF-8') === 0) {
    exit("Заполните поле - Equipment type!");
}
// Equipment
if (mb_strlen($input['d'], 'UTF-8') === 0) {
    exit("Заполните поле - Equipment!");
}
// Description
if (mb_strlen($input['e'], 'UTF-8') === 0) {
    exit("Заполните поле - Description!");
}


// IP Address
if (mb_strlen($input['f'], 'UTF-8') === 0) {
    exit("Заполните поле - IP Address!");
}
$ip_ad_query = mysqli_fetch_assoc(mysqli_query($load, "SELECT ip_ad
	FROM requests WHERE ip_ad='" . addslashes($input['f']) . "' LIMIT 1"));
if ($ip_ad_query) {
    exit("Указанный IP Address есть в БД!");
}


// MAC Address
if (mb_strlen($input['g'], 'UTF-8') === 0) {
    exit("Заполните поле - MAC Address!");
}
$mac_query = mysqli_fetch_assoc(mysqli_query($load, "SELECT mac
	FROM requests WHERE mac='" . addslashes($input['g']) . "' LIMIT 1"));
if ($mac_query) {
    exit("Указанный MAC Address есть в БД!");
}


// Equipment Serial
if (mb_strlen($input['h'], 'UTF-8') === 0) {
    exit("Заполните поле - Equipment Serial!");
}
$serial_e_query = mysqli_fetch_assoc(mysqli_query($load, "SELECT serial_e
	FROM requests WHERE serial_e='" . addslashes($input['h']) . "' LIMIT 1"));
if ($serial_e_query) {
    exit("Указанный Equipment Serial есть в БД!");
}


// System HostName
if (mb_strlen($input['k'], 'UTF-8') === 0) {
    exit("Заполните поле - System HostName!");
}
$s_hostname_query = mysqli_fetch_assoc(mysqli_query($load, "SELECT s_hostname
	FROM requests WHERE s_hostname='" . addslashes($input['k']) . "' LIMIT 1"));
if ($s_hostname_query) {
    exit("Указанный SystemHostname есть в БД!");
}


// Ports
if (mb_strlen($input['l'], 'UTF-8') === 0) {
    exit("Заполните поле - Ports!");
}
$code_query = mysqli_fetch_assoc(mysqli_query($load, "SELECT ports
	FROM requests WHERE ports='" . addslashes($input['l']) . "' LIMIT 1"));
if ($code_query) {
    exit("Указанный Ports есть в БД!");
}


// checkin
if (mb_strlen($input['m'], 'UTF-8') === 0) {
    exit("Заполните поле - Checkin!");
}

// добавляем запись в базу данных
$insert = mysqli_query($load, "INSERT INTO requests (reg, ats, eq_type,
	eq, spaces, ip_ad, mac, serial_e, s_hostname, ports, checkin)
VALUES('" . $input['a'] . "','" . $input['b'] . "','" . $input['c'] . "',
	'" . $input['d'] . "','" . $input['e'] . "','" . $input['f'] . "',
	'" . $input['g'] . "','" . $input['h'] . "','" . $input['k'] . "',
	'" . $input['l'] . "','" . $input['m'] . "')");
if (!$insert) {
    exit("Возникла техническая ошибка");
}
header("HTTP/1.0 410 OK");
echo "Данные сохранены!";
?>