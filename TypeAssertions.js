var message; //type =any
message = "A string ending with C"; // type=any
//use type assertoins to explictily tell tS to take the type as string
// method 1
var res1 = message.charAt(1);
console.log(res1);
//method 2
var res2 = message.charAt(2);
console.log(res2);
