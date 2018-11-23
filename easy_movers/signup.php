<?php
session_start();
if(empty($_POST["user"]) || empty($_POST["pwd"]))
{
  header('Location: login.html');
  exit();

  }

    $host='localhost';
    $username='root';
    $password='root';
    $db_name='LoginCredentials';
    $conn =mysqli_connect($host,$username,$password,$db_name);


    if (!$conn){

    	echo "Connection failed!";
    	exit;

    }
    else {
      echo "connection Successfully!<br>";
    }


    $u = $_POST["user"];
    $p =  $_POST["pwd"];


    $my_query = "select * from users where username='$u'";
    $result=mysqli_query($conn,$my_query);

    if(mysqli_num_rows($result)==1)
    {
      echo "Hello ", $u,"!<br>";
      echo "Account already exists"."   <a href='login.html'>Sign in</a>";
      $_SESSION['user_name']=$u;

    }
    else {
      echo "Account created successfully"."<a href='login.html'>Sign in</a>";
      $my_query = "insert into users(username,password) values ('$u','$p')";
      mysqli_query($conn,$my_query);
    }





?>
