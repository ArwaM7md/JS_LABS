var left=document.getElementById("1");
var play=document.getElementById("2");
var stop=document.getElementById("3");
var right=document.getElementById("4");
var arr=["img/Lemon-juice.png","img/orange-juice.png","img/red.png"];
var interval;

play.addEventListener("click", repeat );
stop.addEventListener("click", STOP);
right.addEventListener("click",play_next);
left.addEventListener("click",play_prev);


var num=1;
function display_all()
{
	var image=document.getElementById("my_img");
	if(num==1)
	{
		image.src=arr[0]
	}else if (num==2)
	{
		image.src=arr[1]
	}else if(num==3)
	{
		image.src=arr[2]
		num=0;
	}
	num++;
	
  
}

function repeat()
{
	interval=setInterval(display_all,500);
}

function STOP()
{
	clearInterval(interval);
}



function play_next()
{     
	var image=document.getElementById("my_img");
	if(num<3)
	{   num++;
		image.src=arr[num-1];
	}else
	{
		num=1;
		image.src=arr[num-1];
	}
	
}

function play_prev()
{     
	var image=document.getElementById("my_img");
	if(num>1)
	{   num--;
		image.src=arr[num-1];
	}else
	{
		num=3;
		image.src=arr[num-1];
	}
	
}


