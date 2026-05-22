let age = 'Nishikant'; // 'String' literal assign to variable age
let isStudent = true; // 'Boolean' literal assign to variable isStudent
let score = 95; // 'Number' literal assign to variable score
let pi = 3.14; // 'Number' literal assign to variable pi
let nullValue = null; // 'Null' literal assign to variable null
let undefinedValue; // 'Undefined' literal assign to variable undefined


//typeof operator to check the type of literals/data types for that variable 
console.log(typeof age);   // "string"
console.log(typeof isStudent); // "boolean"
console.log(typeof score); // "number"
console.log(typeof pi); // "number"
console.log(typeof nullValue); // "object" (this is a known quirk in JavaScript)
console.log(typeof undefinedValue); // "undefined" 


//type of null is object because of a historical bug in JavaScript, but it is still considered a primitive value representing "no value".
//type of undefined is undefined because it represents a variable that has been declared but not assigned a value, or a function that does not return anything.

