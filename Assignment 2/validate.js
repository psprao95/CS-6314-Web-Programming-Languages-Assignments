$(document).ready(function(){


$("#u_name").focus(function()
{
	$("#uname_error").html('infoMessage');
	$("#uname_error").attr('class','info');

});



$("#u_name").blur(function()
{
		var x = $("#u_name").val();
		if(x == '')
		{
			$("#uname_error").html('');
		}
		else if(validateAlphaNum(x) == "")
		{
			$("#uname_error").html('OK');
			$("#uname_error").attr('class','ok');
		}
		else
		{
				$("#uname_error").html('Error');
				$("#uname_error").attr('class','error');
			}

});





$("#pwd").focus(function()
{
		$("#pwd_error").html('infoMessage');
		$("#pwd_error").attr('class','info');
});


$("#pwd").blur(function()
{
	var x=$("#pwd").val();
	if(x=='')
	{
		$("#pwd_error").html('');
	}
	else if(x.length<6)
	{
		$("#pwd_error").html('Error');
		$("#pwd_error").attr('class','error');
	}
	else
	{
		$("#pwd_error").html('OK');
		$("#pwd_error").attr('class','ok');

	}
});


$("#mail").focus(function()
{
		$("#mail_error").html('infoMessage');
		$("#mail_error").attr('class','info');
});


$("#mail").blur(function()
{
		var x=$("#mail").val();
		if(x=='')
		{
			$("#mail_error").html('');
		}
		else if(validateEmail(x))
	  {
			$("#mail_error").html('OK');
			$("#mail_error").attr('class','ok');
	  }
		else
		 {
			 $("#mail_error").html('Error');
 			$("#mail_error").attr('class','error');

		}
});



function validateAlphaNum(word)
{
  var letterNumber = /^[0-9a-zA-Z]+$/;
  if(word.match(letterNumber))
  {
    return "";
  }
  else
  {
    return "error\n";
  }
}




function validateEmail(x)
{
	var letterNumber = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{3,3}$/;
	return letterNumber.test(x);
}



});
