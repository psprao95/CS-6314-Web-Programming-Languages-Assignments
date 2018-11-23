<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="login.css" type="text/css">
</head>



<body>

<?php
  $item=$_GET["entry"];
?>

  <div id="line">
  <form action="books.php" method="GET">
    <label>Search for a book</label>
  <input type="text" name="entry">
  <input type="submit" value="Search" >
  </form>


    <?php

    $host='localhost';
    $username='root';
    $password='root';
    $db_name='Books';
    $conne =mysqli_connect($host,$username,$password,$db_name);


    if (!$conne){

      echo "Connection failed!";
      header('Location: login.html');
      exit();

    }
    else {
      echo "Connected Successfully to the Books database!";

    }



    if($item)
    {
      $my_query = " select * from book where BookTitle like '%$item%'";
    }
    else {
      $my_query="select * from book";
    }
    $result=mysqli_query($conne,$my_query);
    echo "<table class='table table-striped'> <tr><th>Book ID</th><th>Book Title</th><th>List Price</th><th></th></tr>";

    while($row=mysqli_fetch_array($result))
    {
      $iden = $row['BookID'];

      echo "<tr><td>".$row['BookID']."</td><td>".$row["BookTitle"]."</td><td>".$row["ListPrice"]."</td><td><a class='button' href='cart.php?id=$iden'>Add to Cart</a> </td></tr>";

    }
    echo "</table>";
    mysqli_close();

    ?>
    <a href="logout.php">Logout</a>
  </div>





</body>
</html>
