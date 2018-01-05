function style(name,object)
{
	var tag=document.getElementsByTagName(name);
	for(var i=0;i<tag.length;i++)
	{
		tag[i].style.color=object.color;
		tag[i].style.background=object.bg;
	}
	
}

