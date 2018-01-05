var x     =document.getElementById("element_1");

var email =document.getElementById("element_2");

var pass  =document.getElementById("element_3");

var male  =document.getElementById("element_4_1");
var fmale =document.getElementById("element_4_2");

var tennis =document.getElementById("element_5_1");
var squash =document.getElementById("element_5_2");
var foot   =document.getElementById("element_5_3");
var bask   =document.getElementById("element_5_4");
var swim   =document.getElementById("element_5_5");
var count  =0;
var box    =[tennis,squash,foot,bask,swim];
var menu   =document.getElementById("element_6");



var pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var form=document.getElementById("form_1085147");

function valid(e)
{
	if(x.value=="")
	{
		//alert("name is mandatory")
		e.preventDefault();
		x.style.borderColor="red"
		
	}
	
	if(!pattern.test(email.value))
	{
		//alert("email is not valid")
		e.preventDefault();
		email.style.borderColor="red"
		
	}
	if(pass.value.length<8)
	{
		//alert("password is too short")
		e.preventDefault();
		pass.style.borderColor="red"
	}
	if(male.checked==false&&fmale.checked==false)
	{
		//alert("add ur gender");
		e.preventDefault();
		pass.style.borderColor="red";
	}
	for(var i=0;i<box.length;i++)
	{
    
		if(box[i].checked==true)
		{
			count++;
		}
	}
	
	if(count<2)
	{
		alert("choose two sports");
		e.preventDefault();
		//pass.style.borderColor="red";
	}
	
	
	if(menu.value=="")
	{
		alert("choose a country");
		e.preventDefault();
	}
	
	
}
form.addEventListener('submit',valid);

function bold(e)
{   
	e.preventDefault();
	this.style.borderColor="blue";//e.style??
}
function unBold()
{
	this.style.borderColor="green";
}

x.addEventListener("focus",bold);
//x.addEventListener("mouseleave",unBold);
email.addEventListener("focus",bold);
//email.addEventListener("mouseleave",unBold);




