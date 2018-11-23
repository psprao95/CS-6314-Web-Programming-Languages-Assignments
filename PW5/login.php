<?php
session_start();
if(empty($_GET["user"]) || empty($_GET["pwd"]))
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


    $u = $_GET["user"];
    $p =  $_GET["pwd"];
    echo "Hello ", $u,"!<br>";

    $my_query = "select * from users where username='$u' and password='$p'";
    $result=mysqli_query($conn,$my_query);

    if(mysqli_num_rows($result)==1)
    {
      echo "Login successful<br>";
      $_SESSION['user_name']=$_GET["user"];
      header('Location: books.php');
    }
    else
    {
      header('Location: login.html');
      exit();

    }




?>
