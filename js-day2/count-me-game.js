
function count(name,obj)
{
	var tag=document.getElementsByTagName(name);
    var class_count=0;
    var name_count=0;
    var id_count=false;
	for(var i=0;i<tag.length;i++)
	{
        if(tag[i].getAttribute("class")==obj.class)
        {
            class_count++; 
        }
        if(tag[i].getAttribute("name")==obj.name)
        {
            name_count++; 
        }
        if(tag[i].getAttribute("id")==obj.id)
        {
            id_count=id_count||true; 
        }else
        {
            id_count=id_count||false;
        }

            
    }
    console.log( tag.length);
    console.log( class_count);
    console.log( name_count);
    console.log( id_count);
    
}