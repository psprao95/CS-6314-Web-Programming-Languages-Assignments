<?php
$host='localhost';
$username='root';
$password='root';
$db_name='HW3';
$conn =mysqli_connect($host,$username,$password,$db_name);




$y = $_GET["yr"];
$g =  $_GET["gend"];

if($g=="--select--" && $y=="--select--")
{
$my_query = "select * from BabyNames";
}


else if($g=="--select--")
{
$my_query = "select * from BabyNames where year='$y'";
}

else if($y=="--select--")
{
$my_query = "select * from BabyNames where gender='$g'";
}


else
{
  $my_query = "select * from BabyNames where gender='$g' and year='$y'";
}
$result = mysqli_query($conn,$my_query);
$entries=array();



while($row = mysqli_fetch_array($result))
{
    $entry = array("name" =>$row["name"] ,
      "year" =>$row['year'],
    "ranking" =>$row['ranking'],
      "gender" =>$row['gender'] );
      $entries[]=$entry;
}
echo json_encode($entries);



mysqli_close();
?>
