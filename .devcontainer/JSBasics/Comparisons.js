//Basic comparisons: < > <= >= ==

//Basic examples

// console.log(3>2);
// console.log(3<2);
// console.log(3==2);
// console.log(3>=2);
// console.log(3<=2);

/* tricky examples
console.log("2">1)
console.log(1<"2")
console.log(1=<"2")
console.log(1>="2")
console.log(1=="2")
*/

console.log(null<0);//false
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
console.log(null<=0);//true

//the last two o/p are true because equility check == and comparison <= >= work differently
//comparisons(<= >=) convert null to a number , so it could be -ve or +ve thus, both last two o/ps are TRUE...

console.log("__________________for undefined____________________")

console.log(undefined<0);
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined<=0);
console.log(undefined>=0);


//Strict check -> ===
// this checks value and its datatype as well
//example:-
console.log("________strict check________");

console.log("2"===2)