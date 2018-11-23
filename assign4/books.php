<?php
$host='localhost';
$username='root';
$password='root';
$db_name='HW4';
$conn =mysqli_connect($host,$username,$password,$db_name);




$y = $_GET["yr"];
$g =  $_GET["gend"];
$my_query = "select * from Book";

$result = mysqli_query($conn,$my_query);
$entries=array();



while($row = mysqli_fetch_array($result))
{
    $entry = array("name" =>$row["Title"] ,
      "year" =>$row['year'],
    "ranking" =>$row['Price'],
      "gender" =>$row['Category'] );
      $entries[]=$entry;
}
echo json_encode($entries);



mysqli_close();
?>
