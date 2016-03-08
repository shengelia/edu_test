<?php

/**
 * Функция подключения к MySQLi
 *
 **/

function db_connection($db_host, $db_name, $db_user, $db_pass)
{
    global $load;
    $load = @mysqli_init();
    @mysqli_options($load, MYSQLI_INIT_COMMAND, "SET AUTOCOMMIT=0");
    @mysqli_options($load, MYSQLI_OPT_CONNECT_TIMEOUT, 5);
    @mysqli_real_connect($load, $db_host, $db_user, $db_pass, $db_name);
    if (mysqli_connect_errno()) {
        echo mysqli_connect_errno();
        echo 'Сервер недоступен! Повторите попытку позже.';
        exit();
    }
    @mysqli_query($load, "SET character_set_client = 'utf8'");
    @mysqli_query($load, "SET character_set_connection = 'utf8'");
    @mysqli_query($load, "SET character_set_results = 'utf8'");
    return $load;
}

?>
