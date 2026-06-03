//single quote string
let a = 'Hello World';


//double quote string
let b = "Hello World";

//backtick string
let c = `Hello World`;

let name1 = "Nishikant";
let msg = `Hello, ${name1}! 2+2 = ${2+2}`;
console.log(msg);

//multiline string
let report = `
Test : Login
Status : Pass
Duration : 320ms
`
console.log(report);


console.log(String(200));//number to string //200
console.log(String(true));//boolean to string //true
console.log(String(null));//string to string //null
console.log(String(undefined));//number to string //200
console.log(String({name : "Nishikant"})); //object to string //[object Object]
console.log(String([1,2,3,4,5]));  //array to string //1,2,3,4,5