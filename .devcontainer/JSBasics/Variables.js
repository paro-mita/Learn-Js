const accn_ID = 122334
let accn_Email = "xyz@gmail.com"
var accnPswd = "xyz@123"
// can be declare a variable like this as well, but not preferred to do so!!
accn_city = "Jaipur"
//try to change constant account Id
//accn_ID = 144334
/*also it is preferred to initialize a variable with let keyword to avoid
block and functional scope problem, that happens with var keyword!!*/
let accnState;// this will hold a place with type "undefined"
console.log(accn_ID);
accn_Email="abc@gmail.com"
console.log(accn_Email);
accnPswd="abc@2024"
console.log(accnPswd);
accn_city="Delhi"
console.log(accn_city);
console.table([accn_ID, accn_Email, accnPswd, accn_city,accnState]);



