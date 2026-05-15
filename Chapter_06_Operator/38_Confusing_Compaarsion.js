/*
 * JavaScript Confusing Comparisons: == (Loose Equality) vs === (Strict Equality)
 * 
 * ==  : Compares values after performing type coercion (type conversion)
 * === : Compares values AND types (no type coercion)
 * 
 * RULE OF THUMB: Always use === unless you explicitly need type coercion
 */

// ==========================================
// 1. BASIC NUMBER vs STRING COMPARISON
// ==========================================

console.log("=== 1. Number vs String ===");
console.log(`5 == "5"  : ${5 == "5"}`);    // true  (string "5" is coerced to number 5)
console.log(`5 === "5" : ${5 === "5"}`);   // false (different types: number vs string)
console.log(`0 == "0"  : ${0 == "0"}`);    // true
console.log(`0 === "0" : ${0 === "0"}`);   // false
console.log(`0 == ""   : ${0 == ""}`);     // true  (empty string becomes 0)
console.log(`0 === ""  : ${0 === ""}`);    // false

// ==========================================
// 2. BOOLEAN COMPARISONS (The Tricky Ones!)
// ==========================================

console.log("\n=== 2. Boolean Comparisons ===");
console.log(`true == 1   : ${true == 1}`);     // true  (true coerces to 1)
console.log(`true === 1  : ${true === 1}`);    // false (different types)
console.log(`false == 0  : ${false == 0}`);    // true  (false coerces to 0)
console.log(`false === 0 : ${false === 0}`);   // false (different types)
console.log(`true == "1" : ${true == "1"}`);   // true  ("1" → 1, true → 1)
console.log(`true === "1": ${true === "1"}`);  // false

// Watch out for this common bug!
console.log(`"true" == true : ${"true" == true}`);   // false! ("true" string is not coerced to boolean true)
console.log(`"false" == false: ${"false" == false}`); // false!

// ==========================================
// 3. NULL and UNDEFINED
// ==========================================

console.log("\n=== 3. Null and Undefined ===");
console.log(`null == undefined  : ${null == undefined}`);   // true  (special case: they're loosely equal)
console.log(`null === undefined : ${null === undefined}`);  // false (different types)
console.log(`null == 0          : ${null == 0}`);           // false! (null does NOT coerce to 0 with ==)
console.log(`undefined == 0     : ${undefined == 0}`);      // false
console.log(`null == ""         : ${null == ""}`);          // false
console.log(`null == false      : ${null == false}`);       // false

// ==========================================
// 4. EMPTY STRING, ZERO, and FALSE
// ==========================================

console.log("\n=== 4. Empty String, Zero, and False ===");
console.log(`0 == false   : ${0 == false}`);      // true
console.log(`0 === false  : ${0 === false}`);     // false
console.log `"" == false  : ${"" == false}`;      // true (empty string coerces to 0, false coerces to 0)
console.log `"" === false : ${"" === false}`;     // false
console.log `"0" == false : ${"0" == false}`;     // true ("0" → 0, false → 0)
console.log `"0" === false: ${"0" === false}`;    // false

// The famous "falsy" values
console.log(`\n--- All Falsy Values (loose equal to each other?) ---`);
console.log(`0 == ""      : ${0 == ""}`);        // true
console.log(`0 == false   : ${0 == false}`);      // true
console.log `"" == false  : ${"" == false}`;      // true
// But:
console.log(`0 == null    : ${0 == null}`);       // false!
console.log(`0 == undefined: ${0 == undefined}`); // false!

// ==========================================
// 5. NaN (Not a Number) - The Weird One!
// ==========================================

console.log("\n=== 5. NaN Comparisons ===");
console.log(`NaN == NaN   : ${NaN == NaN}`);      // false! (NaN is never equal to anything, even itself)
console.log(`NaN === NaN  : ${NaN === NaN}`);     // false!
console.log(`NaN == "NaN" : ${NaN == "NaN"}`);    // false
console.log(`NaN == null  : ${NaN == null}`);     // false
console.log(`NaN == undefined: ${NaN == undefined}`); // false

// How to check for NaN:
console.log(`\n--- Correct way to check NaN ---`);
console.log(`Number.isNaN(NaN)          : ${Number.isNaN(NaN)}`);          // true
console.log(`Number.isNaN("NaN")        : ${Number.isNaN("NaN")}`);      // false (string)
console.log(`isNaN("hello")             : ${isNaN("hello")}`);           // true (coerces to number first)
console.log(`Number.isNaN("hello")      : ${Number.isNaN("hello")}`);    // false (strict check)

// ==========================================
// 6. ARRAY and OBJECT COMPARISONS
// ==========================================

console.log("\n=== 6. Array and Object Comparisons ===");
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const obj1 = { a: 1 };
const obj2 = { a: 1 };

// Arrays and Objects are compared by REFERENCE, not content
console.log(`[1,2,3] == [1,2,3]  : ${[1, 2, 3] == [1, 2, 3]}`);  // false (different references)
console.log(`[1,2,3] === [1,2,3] : ${[1, 2, 3] === [1, 2, 3]}`); // false
console.log(`arr1 == arr2        : ${arr1 == arr2}`);            // false (different references)
console.log(`arr1 === arr2       : ${arr1 === arr2}`);           // false
console.log(`{a:1} == {a:1}      : ${{ a: 1 } == { a: 1 }}`);    // false
console.log(`{a:1} === {a:1}     : ${{ a: 1 } === { a: 1 }}`);   // false

// Same reference
console.log(`\n--- Same Reference ---`);
const sameArr = arr1;
console.log(`arr1 == sameArr  : ${arr1 == sameArr}`);   // true
console.log(`arr1 === sameArr : ${arr1 === sameArr}`);  // true

// Array to Primitive comparisons
console.log(`\n--- Array to Primitive ---`);
console.log(`[1] == "1"       : ${[1] == "1"}`);        // true  (array coerced to string "1")
console.log(`[1] === "1"      : ${[1] === "1"}`);       // false
console.log(`[1,2] == "1,2"   : ${[1, 2] == "1,2"}`);    // true  (array coerced to string "1,2")
console.log(`[] == ""         : ${[] == ""}`);          // true  (empty array → empty string)
console.log(`[] == 0          : ${[] == 0}`);           // true  (empty array → "", "" → 0)
console.log(`[0] == false     : ${[0] == false}`);      // true  ([0] → "0", "0" → 0, false → 0)

// ==========================================
// 7. OBJECT to PRIMITIVE (valueOf, toString)
// ==========================================

console.log("\n=== 7. Object to Primitive Coercion ===");

const objWithValue = {
    valueOf() {
        return 42;
    }
};

const objWithString = {
    toString() {
        return "hello";
    }
};

console.log(`objWithValue == 42    : ${objWithValue == 42}`);       // true (valueOf called)
console.log(`objWithValue === 42   : ${objWithValue === 42}`);      // false
console.log(`objWithString == "hello": ${objWithString == "hello"}`); // true (toString called)

// ==========================================
// 8. NEGATIVE ZERO (-0) - The Edge Case
// ==========================================

console.log("\n=== 8. Negative Zero ===");
console.log(`0 == -0    : ${0 == -0}`);       // true
console.log(`0 === -0   : ${0 === -0}`);      // true
console.log(`1/0 == 1/-0: ${1 / 0 == 1 / -0}`); // false! (Infinity !== -Infinity)

// To distinguish 0 and -0:
console.log(`Object.is(0, -0)       : ${Object.is(0, -0)}`);        // false
console.log(`Object.is(NaN, NaN)    : ${Object.is(NaN, NaN)}`);     // true (unlike ===)

// ==========================================
// 9. COMPARISON TABLE - QUICK REFERENCE
// ==========================================

console.log("\n=== 9. Comparison Table ===");
console.log(`Expression          == (Loose)    === (Strict)`);
console.log(`------------------------------------------------`);
console.log(`5 ==/=== "5"        ${(5 == "5").toString().padEnd(10)} ${(5 === "5").toString()}`);
console.log(`0 ==/=== ""         ${(0 == "").toString().padEnd(10)} ${(0 === "").toString()}`);
console.log(`null ==/=== undefined ${(null == undefined).toString().padEnd(8)} ${(null === undefined).toString()}`);
console.log(`true ==/=== 1       ${(true == 1).toString().padEnd(10)} ${(true === 1).toString()}`);
console.log(`false ==/=== 0      ${(false == 0).toString().padEnd(10)} ${(false === 0).toString()}`);
console.log(`NaN ==/=== NaN      ${(NaN == NaN).toString().padEnd(10)} ${(NaN === NaN).toString()}`);
console.log(`[] ==/=== []        ${([] == []).toString().padEnd(10)} ${([] === []).toString()}`);
console.log(`{} ==/=== {}        ${({} == {}).toString().padEnd(10)} ${({} === {}).toString()}`);

// ==========================================
// 10. PRACTICAL EXAMPLES AND GOTCHAS
// ==========================================

console.log("\n=== 10. Practical Gotchas ===");

// Gotcha 1: Checking if value exists
const value = "0";
if (value) {
    console.log(`"0" is truthy: YES`);  // "0" is truthy!
}
console.log(`"0" == true: ${"0" == true}`);    // false! ("0" → 0, true → 1, 0 != 1)
console.log(`"0" == false: ${"0" == false}`);   // true!  ("0" → 0, false → 0)

// Gotcha 2: Comparing with null
const userInput = null;
console.log(`\nuserInput = null`);
console.log(`userInput == null     : ${userInput == null}`);       // true
console.log(`userInput == undefined: ${userInput == undefined}`);  // true
console.log(`userInput === null    : ${userInput === null}`);      // true (correct way to check null)
console.log(`userInput == false    : ${userInput == false}`);      // false!

// Gotcha 3: typeof vs comparison
console.log(`\ntypeof null === "object": ${typeof null === "object"}`); // true (JS bug/feature!)
console.log(`null === null           : ${null === null}`);              // true

// Gotcha 4: Array length check
const arr = [];
if (arr.length) {
    console.log("Array has items");
} else {
    console.log(`Array is empty (arr.length: ${arr.length})`);
}

// ==========================================
// 11. RECOMMENDATIONS
// ==========================================

console.log("\n=== 11. Best Practices ===");
console.log(`
1. ALWAYS use === (strict equality) by default
2. Use == ONLY when you specifically want type coercion
3. Check for null: value === null (don't use == unless checking for both null/undefined)
4. Check for NaN: Number.isNaN(value) (don't use === or ==)
5. Check if value exists: value !== null && value !== undefined (or value != null)
6. Convert explicitly instead of relying on coercion:
   - Number("5") === 5   (instead of "5" == 5)
   - String(5) === "5"   (instead of 5 == "5")
   - Boolean(1) === true (instead of 1 == true)
`);

// ==========================================
// 12. INTERVIEW QUESTIONS
// ==========================================

console.log("\n=== 12. Interview Questions ===");
console.log(`Q: What is [] + []?          A: "${[] + []}" (empty string!)`);
console.log(`Q: What is [] + {}?          A: "${[] + {}}" (string "[object Object]")`);
console.log(`Q: What is {} + []?          A: ${{} + []} (0! because {} is parsed as block)`);
console.log(`Q: What is "5" - 3?          A: ${"5" - 3} (number 2, subtraction coerces)`);
console.log(`Q: What is "5" + 3?          A: "${"5" + 3}" (string "53", concatenation)`);
console.log(`Q: typeof [] === 'object'?   A: ${typeof [] === 'object'} (arrays are objects!)`);
console.log(`Q: typeof null === 'object'? A: ${typeof null === 'object'} (JS bug!)`);
console.log(`Q: [] == ![]?                A: ${[] == ![]} (true! [] is truthy, ![] is false, [] coerces to 0)`);

console.log("\n=== End of Comparison Guide ===");
