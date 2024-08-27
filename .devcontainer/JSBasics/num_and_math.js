// we can declare numbers in two ways:
//1st -->implicitly
const num1 = 100
console.log(num1);// 100

//2nd --> explicitly
const num2 = new Number(200)
console.log(num2);// this will tell you that this is a NUMBER(Number:200)

// few mwthods for numbers:

let num4 = 123.4546656
console.log(num4.toFixed(3));// this will give you o/p till 3 decimal vals
console.log(num4.toPrecision(4));// -->123.5
console.log(typeof num4.toString());// first, toString will change the type of num, then it will show the o/p as -->string

let balance = 100000000
console.log(balance.toLocaleString('en-IN')) // this will changes the zeroes is more readable form --> 10,00,00,000

console.log("+++++++++++++++++++++++++ Math Library +++++++++++++++++++++++++++++");

console.log(Math)
console.log(Math.abs(-23))//--> will give always +ve value

console.log(Math.round(2.53))
console.log(Math.ceil(5.5))
console.log(Math.floor(5.5))

console.log(Math.random());// This is used to generate random numbers between 0 to 1
console.log(Math.round((Math.random() * 10) + 1))

// to choose a random number between any range

let min = 20
let max = 30

console.log(Math.round((Math.random() * (max - min +1)) + min));




