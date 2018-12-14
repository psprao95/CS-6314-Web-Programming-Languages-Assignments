$(document).ready(function()
{

$("#myForm").submit(function()
{
  var result="";
	var x =$("#f_name").val();
	var y = $("#l_name").val();
	var z = $("#mail").val();
  var a = $("#pwd").val();
  var b = $("#repwd").val();

  if(x=='' || y=='' || z=='' || a=='' || b=='' )
  {
    result +='All fields are mandatory\n';
  }

  
  if(($("#pwd").val())!= ($("#repwd").val()))
  {
    result +='Passwords do not match\n';
  }

  if(result=="")
  {
    alert('Form submitted');

  }
  else {
    alert(result);
  }

});


});
