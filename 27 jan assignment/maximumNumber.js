var count=prompt("enter total number")
var arr=[];
 for(let i=1;i<=count;i++)
    { 
	 var elem=prompt("enter your element ")
	    arr.push(elem)
	}
	var max=arr[0]
	
	for(let i=1;i<count;i++)
	  { 
	  if(arr[i]>max)
	   {max=arr[i]}
	    
	   
	  }
	  alert(max)
	

