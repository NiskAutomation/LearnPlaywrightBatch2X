var v = 10;
let l = 20;
const c = 30;

var browser = "Chrome";
var browser = "Firefox"; // redeclares allowed with var
browser = "Edge"; // reassignment allowed with var

//for, function
var testcase = ["login", "logout", "signup"];
for(var i = 0; i < testcase.length; i++) {
    console.log(testcase[i]);
}
console.log("Running test case index after loop:", i); // i is accessible here due to var's function scope

console.log('Hi')
console.log('Hi')
console.log('Hi')

function say(){
    console.log('Hi from function')
}
say()
say()