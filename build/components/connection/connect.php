<?php

$server = "localhost";
$user = "portfolio";
$password = "Portfolio > 00";
$database = "portfolio";

$conn = mysqli_connect($server, $user, $password, $database);

if (!$conn) {
    echo ("<script>Connection Failed</script>");
    die();
}
