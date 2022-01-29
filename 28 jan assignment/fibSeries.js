var count1=prompt("enter number")
var count=parseInt(count1)

var fibNumber=0;
var first=0;
var second=1;
console.log(first)
console.log(second)

  for(let i=2;i<count;i++)
    {
	
	 fibNumber=first+second;
	 first=second;
	 second=fibNumber;
	 console.log(fibNumber)
	}
	


	

