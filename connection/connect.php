<?php

    $server = "localhost";
    $user = "root";
    $password = "";
    $database = "portfolio";

    $conn = mysqli_connect($server, $user, $password, $database);

    if(!$conn) {
        echo("<script>Connection Failed</script>");
        die();
    }

?>