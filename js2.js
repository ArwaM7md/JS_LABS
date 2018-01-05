function second()
{   
	var parent=document.body.firstElementChild;
	var child=parent.children;
    var images=["img/red.png","img/green.png","img/gray.png","img/orange.png"]
	var second_view=[];
	for(var i=0;i<13;i++)
	{
		second_view[i]=child[i+1].src
	}
	second_view[13]=images[Math.floor(((Math.random())*4))];

	for(var i=0;i<14;i++)
	{
		child[i].src=second_view[i];
	}

	
}
setInterval(second,2500);