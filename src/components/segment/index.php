<?php require("../connection/connect.php") ?>

<?php

    $guestId = $name = $lastName = $email = $subject = $message = "";

    if(!empty($_POST["guestId"])) {
        $guestId = $_POST["guestId"];
        $guestId = trim($guestId);
        $guestId = htmlspecialchars($guestId);
        $guestId = stripslashes($guestId);
    }

    if(!empty($_POST["name"])) {
        $name = $_POST["name"];
        $name = trim($name);
        $name = htmlspecialchars($name);
        $name = stripslashes($name);
    }

    if(!empty($_POST["lastName"])) {
        $lastName = $_POST["lastName"];
        $lastName = trim($lastName);
        $lastName = htmlspecialchars($lastName);
        $lastName = stripslashes($lastName);
    }

    if(!empty($_POST["email"])) {
        if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
            $email = $_POST["email"];
            $email = trim($email);
            $email = htmlspecialchars($email);
            $email = stripslashes($email);
        }
    }

    if(!empty($_POST["subject"])) {
        $subject = $_POST["subject"];
        $subject = trim($subject);
        $subject = htmlspecialchars($subject);
        $subject = stripslashes($subject);
    }

    if(!empty($_POST["message"])) {
        $message = $_POST["message"];
        $message = trim($message);
        $message = htmlspecialchars($message);
        $message = stripslashes($message);
    }

    if(!empty($guestId) && !empty($name) && !empty($lastName) && !empty($email) && !empty($subject) && !empty($message)) {

        $to = "gsamvel2005@gmail.com";
        $headers = "From: $email \r\n";
        $headers .= "$name $lastName \r\n";
        $headers .= "Information ID $guestId \r\n";
        $headers .= "Reply-To $email \r\n";
        $result = mail($to, $subject, $message, $headers);
        $result = mysqli_query($conn, "UPDATE `guests` SET `guest_status` = 'Verified' WHERE `guests`.`guest_id` = '$guestId'");

    }

?>