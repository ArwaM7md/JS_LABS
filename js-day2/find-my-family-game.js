function family(name)
{
	var tag=document.getElementsByTagName(name);
	var Parr=[];
	var Carr=[];
	var Sarr=[];
	var obj=[];
	var j;
	
	
	for(var i=0;i<tag.length;i++)
	{   
		for(j=i;j<tag.length;j++)
		{
 			if(tag[j].nextElementSibling!=null)
			{
				Sarr[i]+=String(tag[j].nextElementSibling);
				
			}else
			{
				
				Sarr[i]+=" "
			}
			
		}
		for(j=i;j>0;j--)
		{
			if(tag[j].previousElementSibling!=null)
			{   
				
				Sarr[i]+=tag[j].previousElementSibling;
				
			}else
			{   
				
				Sarr[i]+=" "
			}
			
		}
		
	}
	for(var i=0;i<tag.length;i++)
	{
		Parr[i]=tag[i].parentElement;
		Carr[i]=tag[i].children;
		obj[i]={parent:Parr[i],children:Carr[i],Sibling:Sarr[i]}
	}
	console.log(obj);
	
}


