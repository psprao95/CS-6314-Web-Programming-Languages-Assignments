<?php
$host='localhost';
$username='root';
$password='root';
$db_name='HW4';
$conn =mysqli_connect($host,$username,$password,$db_name);


$url = $_SERVER['REQUEST_URI'];

$values = parse_url($url);

$host = explode('/',$values['path']);

$id=$host[2];

if($id)
{
  $my_query="Select Book.`Book id`,Title,Year,Price,Category,group_concat(Distinct concat(Authors.Author_Name,' ')) as Authors
from (Book  JOIN Book_Authors on (Book.`Book id`=Book_Authors.`Book id`))
 join Authors on (Book_Authors.`Author id`=Authors.`Author id`) where Book.`Book id`=$id
 group by `Book`.`Book id`";

 $result = mysqli_query($conn,$my_query);
 $entries=array();

 while($row = mysqli_fetch_array($result))
 {
     $entry = array(Title =>$row["Title"] ,
       "Year" =>$row['Year'],
     "Price" =>$row['Price'],
       "Category" =>$row['Category'],
     "Authors" =>$row['Authors']."<br>" );
       $entries[]=$entry;
 }
 echo json_encode($entries);
}

else {
  $my_query="Select Title,Price,Category from Book";
  $result = mysqli_query($conn,$my_query);
  $entries=array();
  while($row = mysqli_fetch_array($result))
  {
      $entry = array(Title =>$row["Title"] ,

      "Price" =>$row['Price'],
        "Category" =>$row['Category']."<br>");
        $entries[]=$entry;
      }
      echo json_encode($entries);
}





mysqli_close();
?>
