// two types of string var declaration
// 1st -->
let str1 = "Hello"

// 2nd -->
const str2 = new String('New Me')

console.log(str1);
console.log(str2);
// to check prototye of String variable
console.log(str2.__proto__); // this will give {} as o/p , that means it is an object

// String Interpolation---->

console.log(`${str1}, now you all meet ${str2}`);

//differnt methods used in strings

let str3 = "My-name-is-paro"
console.log(str3.length);// this will give you length--15
console.log(str3.toUpperCase());// this will convert the string in uppercase
let str4 = `Hello people` // new way
console.log(str4);
console.log(str4.includes('pe'));
let str5 = "     AEIOU-aeiou   "
console.log(str5);
console.log(str5.trim());// this will trim  the whitespaces in starting and ending
console.log(str3.charAt(4));// this will tell what is placed at 4th index
console.log(str3.indexOf('p'))//this will tell the value at index for p



