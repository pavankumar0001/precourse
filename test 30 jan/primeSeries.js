//print prime number series from 1 to n
var n=parseInt(prompt("enter a number"))



for (var i = 1; i <=n; i++) {
    var flag = 0;

    
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
   
   
  