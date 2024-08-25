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

// ---------- Memory Alloation-------------

//Primitive datatypes --> Stack Memory
// Non-Primitive datatypes --> Heap Memory

//Examples

let name2 = "ME"
let changeName = name2 // Here it doesn't get the original value, but the Copy of the original value
changeName = "Lost"
console.log(changeName);// it will print Lost
console.log(name2);// this will remain the same

let user ={
    email:"abc@gmail.com",
    upi:"abc@ybl"
}

let otherUser = user 
// it will have the reference of original value, means if we make changes in this, original value also get changed

otherUser.email = "xyz@gamil.com"
console.log(otherUser.email);
console.log(user.email);
// above both will print same value


