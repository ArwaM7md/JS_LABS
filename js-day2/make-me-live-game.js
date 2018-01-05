function live()
{
	var parent=document.body;
	var child=parent.children;
	var anchor=[];
	for(var i=0;i<child.length;i++)
	{    
		 anchor[i]=document.createElement('a');
		parent.replaceChild(anchor[i],child[i]);
		
	
		
	}
	for(var j=1;j<10;j+=2)
	{
		parent.insertBefore(document.createElement("br"),child[j]);
	}
	
	
	child[0].setAttribute('href',"http://www.google.com");
	child[0].textContent='google';
	
	child[2].setAttribute('href',"http://www.yahoo.com");
	child[2].textContent='yahoo';
	
	child[4].setAttribute('href',"http://www.facebook.com");
	child[4].textContent='facebook';
	
    child[6].setAttribute('href',"http://www.twitter.com");
	child[6].textContent='twitter';
	
	child[8].setAttribute('href',"http://www.udacity.com");
	child[8].textContent='udacity';
	
	
  	
	
}