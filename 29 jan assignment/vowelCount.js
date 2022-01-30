
	
var str=prompt("Enter a string");
var str1=str.split("");

var count=0;
for(var i=0; i<str1.length; i++){
    switch(str1[i]){
    case "a":
    case "A":
         count=count+1;
         break;
   case "E":
   case "e":
         count=count+1;
         break;
   
   case "I":
   case "i":
         count=count+1;
         break;

   case "o":
   case "O":
         count=count+1;
         break;

   case "u":
   case "U":
        count=count+1;
        break;
   }

} console.log(count)

	

