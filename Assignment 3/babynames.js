
$(document).ready(function()
{

  $("#idea").click(function(){
    var x = $("#year").val();
    var y = $("#gender").val();


    $.ajax({
      url:"babynames.php",
      type:'GET',
      dataType:'json',
      data:"yr="+ x + "&gend=" + y,


      success(data)
      {

        var table="<table class='table table-striped' cellspacing='20'><tr><th>Name</th><th>Year</th><th>Ranking</th><th>Gender</th></tr>";
        $.each(data,function(index,value)
        {
          table+="<tr>";
          $.each(value,function(i,e)
          {
          table+="<td align='center'>"+e+"</td>";
        });
          table+="<tr>";
      });
      table+="</table>";
      $("#results").html(table);
    }
});
});



});
