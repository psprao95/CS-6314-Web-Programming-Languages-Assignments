<?php
session_start();

if($_SERVER["REQUEST_METHOD"]=="POST")

{
  if(empty($_POST["user"]) || empty($_POST["pwd"]) || empty($_POST["mail"]))
  {
    header('Location: login.html');
    exit();

    }

    if (!filter_var($_POST["mail"], FILTER_VALIDATE_EMAIL))
    {
      header('Location: login.html');
      exit();
    }

    if(strlen($_POST["pwd"])< '6' )
    {
      header('Location: login.html');
      exit();
    }

    elseif(!preg_match("#[0-9]+#",$_POST["pwd"]))
    {
      header('Location: login.html');
      exit();
    }

    elseif(!preg_match("#[A-Z]+#",$_POST["pwd"]))
    {
      header('Location: login.html');
      exit();
    }

    elseif(!preg_match("#[a-z]+#",$_POST["pwd"]))
    {
      header('Location: login.html');
      exit();
    }

    $_SESSION['user_name']=$_POST["user"];
    $_SESSION['email_address']=$_POST["mail"];
    header('Location: welcome.php');

}


?>
