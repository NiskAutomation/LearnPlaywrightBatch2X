// JavaScript Number Literals - All Types

// JavaScript has only ONE number type: Number (64-bit floating point)
// But numbers can be written in many formats.

// Integer Numbers
// Whole numbers without decimal point.
let integer = 42;
console.log("Integer:", integer); // 42

// Floating Point Numbers (Decimals)
// Numbers with a decimal point.
let decimal = 3.14;
console.log("Decimal:", decimal); // 3.14

let negativeDecimal = -0.5;
console.log("Negative Decimal:", negativeDecimal); // -0.5

// Scientific Notation (Exponential)
// Used for very large or very small numbers.
// e = multiply by 10 to the power of n
let large = 1e5;    // 1 * 10^5 = 100000
console.log("Scientific (large):", large); // 100000

let small = 1e-5;   // 1 * 10^-5 = 0.00001
console.log("Scientific (small):", small); // 0.00001

// Hexadecimal (Base 16)
// Starts with 0x or 0X. Uses digits 0-9 and letters A-F.
let hex = 0xFF;
console.log("Hexadecimal 0xFF:", hex); // 255

let hexColor = 0x1A2B3C;
console.log("Hexadecimal 0x1A2B3C:", hexColor); // 1715004

// Binary (Base 2)
// Starts with 0b or 0B. Uses digits 0 and 1.
let binary = 0b1010;
console.log("Binary 0b1010:", binary); // 10

let binaryByte = 0b11111111;
console.log("Binary 0b11111111:", binaryByte); // 255

// Octal (Base 8)
// Starts with 0o or 0O. Uses digits 0-7.
let octal = 0o377;
console.log("Octal 0o377:", octal); // 255

let octal2 = 0o10;
console.log("Octal 0o10:", octal2); // 8

// Special Number Values

// Infinity
// Represents a number larger than any other number.
let positiveInfinity = Infinity;
console.log("Positive Infinity:", positiveInfinity); // Infinity

let negativeInfinity = -Infinity;
console.log("Negative Infinity:", negativeInfinity); // -Infinity

console.log("1 / 0:", 1 / 0);   // Infinity
console.log("-1 / 0:", -1 / 0); // -Infinity

// NaN (Not a Number)
// Represents a value that is not a valid number.
let notANumber = NaN;
console.log("NaN:", notANumber); // NaN

console.log("'hello' * 2:", "hello" * 2); // NaN
console.log("0 / 0:", 0 / 0);             // NaN

// BigInt
// For integers larger than Number.MAX_SAFE_INTEGER.
// Created by appending 'n' to the end of an integer.
let bigNumber = 9007199254740991n;
console.log("BigInt:", bigNumber); // 9007199254740991n

let bigHex = 0x1fffffffffffffn;
console.log("BigInt Hex:", bigHex); // 9007199254740991n

let huge = 123456789012345678901234567890n;
console.log("Huge BigInt:", huge);

// Checking types
console.log("\n--- Type Checks ---");
console.log("typeof 42:", typeof 42);           // "number"
console.log("typeof 3.14:", typeof 3.14);       // "number"
console.log("typeof Infinity:", typeof Infinity); // "number"
console.log("typeof NaN:", typeof NaN);           // "number"
console.log("typeof 42n:", typeof 42n);           // "bigint"


//in bigint n is used to represent big integer literals, it is a way to create BigInt values in JavaScript. By appending 'n' to the end of an integer literal, you can create a BigInt value that can represent integers larger than the maximum safe integer limit of the Number type.