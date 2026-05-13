// Backtick vs Single Quote vs Double Quote in JavaScript

// Single Quote (' ') and Double Quote (" ")
// Both are the same. They create simple strings.
// Use whichever you prefer, but be consistent.

let single = 'Hello';
let double = "World";
console.log(single); // Hello
console.log(double); // World

// Backtick (` `) - Template Literal
// Supports string interpolation, multi-line, and expressions.

let name = "Alice";
let age = 25;

// All three in one example
let withSingle = 'Hello ' + name + ', you are ' + age + ' years old.';
let withDouble = "Hello " + name + ", you are " + age + " years old.";
let withBacktick = `Hello ${name}, you are ${age} years old.`;

console.log(withSingle);  // Hello Alice, you are 25 years old.
console.log(withDouble);  // Hello Alice, you are 25 years old.
console.log(withBacktick); // Hello Alice, you are 25 years old.

// Key Differences

// 1. Concatenation
// Single/Double need + to join variables
// Backtick uses ${} directly inside the string

// 2. Multi-line strings
let multiLineBacktick = `Line 1
Line 2
Line 3`;
console.log(multiLineBacktick);

// Single/Double cannot do multi-line directly without \n
let multiLineOld = "Line 1\nLine 2\nLine 3";
console.log(multiLineOld);

// 3. Expressions inside string
let a = 10;
let b = 20;
console.log(`Sum is ${a + b}`);        // Sum is 30
console.log("Sum is " + (a + b));      // Sum is 30

// Quick Rule
// Single/Double: Simple static text
// Backtick: Dynamic text with variables or expressions
