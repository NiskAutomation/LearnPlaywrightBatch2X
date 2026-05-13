// null vs undefined in JavaScript
// undefined: A variable exists but has no value assigned yet. JavaScript gives this automatically.
// null: A variable is intentionally set to have no value. The programmer gives this manually.

// undefined
// JavaScript automatically assigns undefined when a variable is declared
// but no value is given to it.

let a;
console.log(a);           // undefined
console.log(typeof a);    // "undefined"

// undefined is also the return value of a function with no return statement.
function doNothing() {}
console.log(doNothing()); // undefined

// null
// null is explicitly set by the programmer to mean "no value" or "empty".

let b = null;
console.log(b);           // null
console.log(typeof b);    // "object" (known JavaScript quirk/bug)

// Key Differences

// Difference 1: Origin
// undefined = given by JavaScript automatically
// null      = given by the programmer intentionally

let autoValue;
console.log(autoValue); // undefined because JS set it

let manualValue = null;
console.log(manualValue); // null because we set it

// Difference 2: Loose equality vs Strict equality
console.log(null == undefined);  // true  (loose check sees them as similar)
console.log(null === undefined); // false (strict check sees different types)

// Difference 3: Type
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"

// Practical Example
let user = null;        // user is intentionally empty right now
let profile;            // profile is not set yet, so it is undefined

console.log(user);      // null
console.log(profile);   // undefined

// Checking for null or undefined
let value = null;

if (value == null) {
    console.log("Value is either null or undefined");
}

// Better practice: strict checks
if (value === null) {
    console.log("Value is exactly null");
}

if (value === undefined) {
    console.log("Value is exactly undefined");
}

// Default value using nullish coalescing (??)
let input = null;
let result = input ?? "default";
console.log(result); // "default"

let input2;
let result2 = input2 ?? "default";
console.log(result2); // "default"

let input3 = 0;
let result3 = input3 ?? "default";
console.log(result3); // 0 (0 is not null/undefined)
