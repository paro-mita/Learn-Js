let today = new Date()
console.log(today);// it will give Date in very unformatted form
// change the date's formats:---

// console.log(today.toDateString());// this will only return the date without time
// console.log(today.toISOString()) // 2024-08-27T09:29:35.079Z
// console.log(today.toJSON()) // 2024-08-27T09:29:35.079Z
// console.log(today.toLocaleDateString()) // this will return date as  mm/dd/yyyy
// console.log(today.toLocaleTimeString()) // will return time 
// console.log(today.toString())// this will return the date and time as :Tue Aug 27 2024 09:29:35 GMT+0000 (Coordinated Universal Time)
// console.log(today.toUTCString())// --> Tue, 27 Aug 2024 09:29:35 GMT
// console.log(today.toTimeString()) //this will return time in GMT timezone


// if we want date according to us, we can get it
let ourDate = new Date(2024, 9, 7, 12, 12)
console.log(ourDate.toLocaleString());// will give us common used format for date-time

// type of Date: Object

//TimeStamp:--------
//will give o/p in miliseconds and TimeStamps are mainly used in Quizzes polls etc, where seconds(time) are very crucial




