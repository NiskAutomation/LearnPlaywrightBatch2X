// ============================================================
// Hoisting and Temporal Dead Zone (TDZ) Research
// Variables: var, let, and const
// ============================================================

// Hoisting
// JavaScript moves declarations to the top of their scope during compilation.

// var Hoisting
// 'var' is hoisted and initialized with 'undefined'.

console.log(myVar); // undefined
var myVar = 10;
console.log(myVar); // 10

// Behind the scenes:
// var myVar;
// console.log(myVar); // undefined
// myVar = 10;
// console.log(myVar); // 10

function varHoistingDemo() {
    console.log(insideVar); // undefined
    var insideVar = "I am inside function";
    console.log(insideVar); // I am inside function
}
varHoistingDemo();

// let and const Hoisting
// Both are hoisted but NOT initialized. They enter the Temporal Dead Zone.

// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
console.log(myLet); // 20

// console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 100;
console.log(myConst); // 100

// Temporal Dead Zone (TDZ)
// The period between scope entry and variable declaration where access throws ReferenceError.

function tdzDemo() {
    // console.log(value); // ReferenceError - TDZ!
    let temp = "temporary";
    console.log(temp);

    let value = "now I exist"; // TDZ ends here
    console.log(value); // now I exist
}
tdzDemo();

// const must be initialized at declaration
// const myConst2; // SyntaxError

// Comparison
/*
| Feature           | var              | let              | const            |
|-------------------|------------------|------------------|------------------|
| Hoisted           | Yes              | Yes (in TDZ)     | Yes (in TDZ)     |
| Initialized       | undefined        | No               | No               |
| Scope             | Function/Global  | Block            | Block            |
| Re-declarable     | Yes              | No               | No               |
| Re-assignable     | Yes              | Yes              | No               |
| TDZ Exists        | No               | Yes              | Yes              |
*/

// Practical Example: Loops
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var i:", i), 100); // Output: 3, 3, 3
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let j:", j), 100); // Output: 0, 1, 2
}

// typeof in TDZ
// console.log(typeof tdzVar); // ReferenceError - TDZ violation
let tdzVar = "I exist now";
console.log(typeof tdzVar); // string

// const with objects/arrays
const person = { name: "Alice" };
person.name = "Bob"; // Allowed - modifying the object
console.log(person); // { name: "Bob" }
// person = {}; // TypeError

const numbers = [1, 2, 3];
numbers.push(4); // Allowed
console.log(numbers); // [1, 2, 3, 4]
// numbers = []; // TypeError

// Best Practices
// - Prefer 'const' by default
// - Use 'let' when re-assignment is needed
// - Avoid 'var'
// - Declare variables at the top of their scope
// - Always initialize const at declaration
