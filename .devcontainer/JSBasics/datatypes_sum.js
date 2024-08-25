// there are two types of Datatypes in JS:-
// 1st -> Primitive (supports call by value)
// 2nd -> Non-Primitive(Reference type)(supports call by reference)


console.log("Primitive datatypes are----------------");

const num = 100 // -> Number
let  name1 = "myself" // -> String 
const isLogIn = true// -> Boolean
let userEmail // -> Undefined
const BigNum = 1223323434545645645465665n // -> Bigint 
const ID = Symbol('1233')//-> Symbol(it is mostly used to tell the uniqueness of a variable)
let Temp = null // -> Object
// Now let's check the types of above variables
console.log(typeof num);
console.log(typeof name1);
console.log(typeof isLogIn);
console.log(typeof userEmail);
console.log(typeof BigNum);
console.log(typeof ID);
console.log(typeof Temp);

console.log("Non- Primitive datatypes are------------------");

const fruits =["banana", "apple", "peach"]
let reg ={
    name:"rohit",
    rollNo: 22
}
let myFunc = function log() {
    console.log("hello world!!!!");
    
}

console.log(typeof fruits);
console.log(typeof reg);
console.log(typeof myFunc);

