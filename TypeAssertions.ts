let message; //type =any
message = "A string ending with C"; // type=any

//use type assertions to explictily tell tS to take the type as string
// does not change the type of variable message , just to use intellisense we do it.
// method 1

const res1 = (<string>message).charAt(1);
console.log(res1);

//method 2

const res2 = (message as string).charAt(2);
console.log(res2);

// arrow functions

const func = (msg) => console.log("Hello");

const func1 = (msg) => {
  console.log(msg);
};
