var num; // declare num as number , will give error if type changed leter
num = 23;
var str = "Hello World";
var str1;
str1 = "Let String";
var arr = [1, 2, 34, 5]; // make array of numbers
/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */
var bool;
var type;
var newArr = [1, "Hello", 2, true]; //any type inside arr
//Enums
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
console.log(Color.Red);
