let num: number; // declare num as number , will give error if type changed leter
num = 23;
const str: string = "Hello World";
let str1: string;
str1 = "Let String";
const arr: number[] = [1, 2, 34, 5]; // make array of numbers
/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */
let bool: boolean;
let type: any;
let newArr: any[] = [1, "Hello", 2, true]; //any type inside arr

//Enums

enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

console.log(Color.Red);
