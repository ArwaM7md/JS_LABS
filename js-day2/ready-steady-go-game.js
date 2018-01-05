function choose(num)
{
	var parent=document.body.firstElementChild;
	if(num==1)
	{
		var child=parent.children;
		child[0].src="img/red.png"
		child[1].src="img/gray.png"
		child[2].src="img/gray.png"
		
	}else if(num==2)
	{
		var child=parent.children;
		
		child[0].src="img/gray.png"
		child[1].src="img/green.png"
		child[2].src="img/gray.png"
	}else
	{
		var child=parent.children;
		child[0].src="img/gray.png"
		child[1].src="img/gray.png"
		child[2].src="img/orange.png"
	}
	
}