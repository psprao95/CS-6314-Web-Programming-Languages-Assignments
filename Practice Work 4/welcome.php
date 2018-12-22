<?php

  session_start();
  if(isset( $_SESSION['user_name']))
  {
    echo "Welcome ".$_SESSION['user_name']." !";
  }
  else {
    header('Location:login.html');
    exit();
  }

  if(isset($_SESSION['counter']))
  {
    $_SESSION['visits']=1;

  }
  else {
    $_SESSION['visits']+=1;
  }

  echo "You have visited this page ". $_SESSION['visits']. " times.";

?>


<html>
<body>

  <br><br>
<a href="#" onclick="window.location.reload(true);">Refresh Page</a><br><br>
<a href="logout.php">Logout</a>

</body>
</html>
