document.getElementById("f_name").onfocus=function()
{
	var p=document.getElementById('fname_error');
	p.innerHTML="infoMessage";
	p.className="info";
}

document.getElementById("f_name").onblur=function()
{
	var x = document.getElementById("f_name").value;
	var y = validateAlphaNum(x);
	var z = document.getElementById('fname_error');
	if(x == "")
	{
		z.innerHTML = "";

	}
	else if(y == "")
	{
		z.innerHTML = "OK";
		z.className="ok";
	}
	else
		{
			z.innerHTML = "Error";
				z.className="error";
		}
}



// Event Handlers for last name field

document.getElementById("l_name").onfocus=function()
{
	var p=document.getElementById('lname_error');
	p.innerHTML="infoMessage";
	p.className="info";
}




document.getElementById("l_name").onblur=function()
{
	var x = document.getElementById("l_name").value;
	var y = validateAlphaNum(x);
	var z = document.getElementById('lname_error');
	if(x == "")
	{
		z.innerHTML = "";
	}
	else if(y == "")
	{
		z.innerHTML = "OK";
		z.className="ok";
	}
	else
		{
			z.innerHTML = "Error";
				z.className="error";
		}

}



document.getElementById("mail").onfocus=function()
{
	var p=document.getElementById('mail_error');
	p.innerHTML="infoMessage";
	p.className="info";
}

document.getElementById("mail").onblur=function()
{
	var x = document.getElementById("mail").value;

	var z = document.getElementById('mail_error');
	if(x == "")
	{
			z.innerHTML = "";
	}
	else if(validateEmail(x))
	{
		z.innerHTML = "OK";
		z.className="ok";
	}
	else
		{
			z.innerHTML = "Error";
				z.className="error";
		}
}






document.getElementById("u_name").onfocus=function()
{
	var p=document.getElementById('uname_error');
	p.innerHTML="infoMessage";
	p.className="info";
}


document.getElementById("u_name").onblur=function()
{
	var x = document.getElementById("u_name").value;
	var y = validateAlphaNum(x);
	var z = document.getElementById('uname_error');
	if(x == "")
	{
		z.innerHTML = "";
	}
	else if(y == "")
	{
		z.innerHTML = "OK";
		z.className="ok";
	}
	else
		{
			z.innerHTML = "Error";
				z.className="error";
		}
}





document.getElementById('pwd').onfocus=function()
{
	var p=document.getElementById('pwd_error');
	p.innerHTML="infoMessage";
	p.className="info";
}


document.getElementById("pwd").onblur=function()
{
	var x = document.getElementById("pwd").value;
	var y = validatePasswordLength();
	var z = document.getElementById('pwd_error');
	if(x == "")
	{
		z.innerHTML = "";
	}
	else if(y == "")
	{
		z.innerHTML = "OK";
		z.className="ok";
	}
	else
		{
			z.innerHTML = "Error";
				z.className="error";
		}
}





document.getElementById("repwd").onfocus=function()
{
	var p=document.getElementById('repwd_error');
	p.innerHTML="infoMessage";
	p.className="info";
}



document.getElementById("repwd").onblur=function()
{
	var x = document.getElementById("repwd").value;
	var y = validatePassword();
	var z = document.getElementById('repwd_error');
	if(x == "")
	{
		z.innerHTML = "";
	}
	else if(y == "")
	{
		z.innerHTML = "OK";
		z.className="ok";
	}
	else
		{
			z.innerHTML = "Error";
				z.className="error";
		}
}





function validateForm()
{

  var result="";
	var x = document.getElementById("f_name").value;
	var y = document.getElementById("l_name").value;
	var z = document.getElementById("u_name").value;
	var e = document.getElementById("mail").value;
  result+=validateAlphaNum(x);
	result+=validateAlphaNum(y);
	result+=validateAlphaNum(z);
  if(validateEmail(e))
	{
		result+="";
	}
	else {
			result+='Email address not valid\n';
	}
	result+= validatePasswordLength();
  result+= validatePassword();
  result+=validateTerms();

  if(result == "")
  {
    alert("Congratulations! Your account has been created.");
    return true;
  }
  else
  {
    alert("Validation errors:\n" + result);
		return false;
  }
}




function validateAlphaNum(word)
{
  var letterNumber = /^[0-9a-zA-Z]+$/;
  if(word.match(letterNumber))
  {
    return "";
  }
  else
  {
    return "first name, last name and username fields are alphanumeric\n";
  }
}



function validateEmail(x)
{
	var letterNumber = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{3,3}$/;
	return letterNumber.test(x);
}




function validatePassword()
{
  var password = document.getElementById('pwd').value;
  var retype = document.getElementById('repwd').value;
    if(password != retype)
    {
      return "Passwords do not match\n";
    }
  return "";
}


function validatePasswordLength()
{
  var password = document.getElementById('pwd').value;
  if(password.length < 6)
  {
    return "Password length should be atleast 6 characters\n";
  }
  return "";

}


function validateTerms()
{
  var terms = document.getElementById("terms");
  if(!terms.checked)
  {
    return "Please check the agreement box\n";
  }
  return "";
}
