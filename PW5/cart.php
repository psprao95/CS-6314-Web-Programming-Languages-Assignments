<?php

session_start();

$iden =$_GET['id'];


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
  echo "Connected Successfully to the Books database!<br>";

}


$p = $_SESSION['user_name'];


$my_quer = "select * from shopping_cart where user_name='$p' and book_id='$iden'";
$res=mysqli_query($conne,$my_quer);

if(mysqli_num_rows($res)>0)
{
echo "Item has been already added to cart";
}
else
{

  $orig = "insert into shopping_cart(user_name,book_id) values('$p','$iden')";
  mysqli_query($conne, $orig);
  echo "Item added to cart";
}



$my_query="select * from shopping_cart where user_name='$p'";
$result=mysqli_query($conne,$my_query);



echo "<table class='table table-striped'> <tr><th>Book ID</th><th>Book Title</th><th>List Price</th></tr>";
  $total =0;
while($row=mysqli_fetch_array($result))
{
  $temp = $row['book_id'];

  $q="select * from book where BookID='$temp'";
  $r=mysqli_query($conne,$q);
  while($rop=mysqli_fetch_array($r))
{
  echo "<tr><td>".$rop['BookID']."</td><td>".$rop["BookTitle"]."</td><td>".$rop["ListPrice"]."</td></tr>";
  $total += $rop["ListPrice"];
}
}

echo "</table><br/>";
echo "Cart Total: $". $total."<br>";
echo "<a href='books.php'>Continue Shopping</a>";
mysqli_close();

?>
