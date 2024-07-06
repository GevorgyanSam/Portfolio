<?php

$guest_id = "";
while (strlen($guest_id) < 8) {
    $rand = rand(0, 9);
    $guest_id .= $rand;
}
$guest_ip_addr = $_SERVER["REMOTE_ADDR"];
$guest_info = $_SERVER["HTTP_USER_AGENT"];

$result = mysqli_query($conn, "SELECT * FROM `guests` WHERE `guest_id` IN ('$guest_id')");
if (!mysqli_num_rows($result)) {
    $result = mysqli_query($conn, "INSERT INTO `guests` (`guest_id`, `guest_ip_addr`, `guest_info`, `guest_status`) VALUES ('$guest_id', '$guest_ip_addr', '$guest_info', 'Unverified')");
}
