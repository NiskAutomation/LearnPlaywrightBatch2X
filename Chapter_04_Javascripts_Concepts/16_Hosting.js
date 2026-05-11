// JS Engine Concepts: Hoisting
//line by line , JIT Compilation
 
console.log(greeting); // Output: undefined (due to hoisting of variable declaration)
var greeting = 'Hello, World!';
console.log(greeting); // Output: Hello, World!


//Behind the scenes, the JavaScript engine hoists the variable declaration to the top of its scope, but not the assignment. So, the code is interpreted as:
// var greeting;  --> hosted with undefined
// console.log(greeting); // Output: undefined
// greeting = 'Hello, World!'; // assignment happens here
// console.log(greeting); // Output: Hello, World!


//var a
console.log(a); // Output: undefined (due to hoisting of variable declaration)
var a = 'Nishikant';
console.log(a); // Output: Nishikant