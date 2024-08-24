
let variable = 66
console.log(variable)
console.log(typeof variable)
//change the type as String

let changeVar = String(variable)
console.log(changeVar);
console.log(typeof changeVar)


let v1 = "ramu"
let change_v1 = Number(v1)
console.log(typeof(change_v1));// this will show number
console.log(change_v1);// this will show NaN as output as string value couldn't be changed in number form

// if we try to change type for boolean
let v2 = true
let change_v2 = Number(v2)
console.log(change_v2);// it will give us output as 1 becuz true <-> 1 and false <-> 0
let conversion = Boolean(change_v2)
console.log(conversion);// it will again give us output as true

// thus,we change some type of variable to Number type, then:
// if string to number=> NaN
// if alphnumeric to number => NaN
// if Boolean to number, true-> 1, false ->0
// null to number=> 0
//undefined => NaN

// when number/string to boolean
// 1 or any value except 0->true,0->False
// ""-> false, "anything..."-> true
let var3 = 10
let changevar3 = Boolean(var3)
console.log(changevar3);
console.log(typeof changevar3)

