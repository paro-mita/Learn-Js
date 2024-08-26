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
console.log(typeof num4.toString());// first, toString will change the type of num, then it will show the o/p as string

let balance = 100000000
console.log(balance.toLocaleString('en-IN'))
