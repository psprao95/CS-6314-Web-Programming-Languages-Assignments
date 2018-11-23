<?php


session_start();
unset($_SESSION["user_name"]);
unset($_SESSION["email_address"]);
unset($_SESSION["visits"]);
header("Location: login.html");
exit();

?>
