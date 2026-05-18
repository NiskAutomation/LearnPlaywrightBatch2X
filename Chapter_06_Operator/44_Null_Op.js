//Null Operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand.
// It is often used to provide default values for variables that may be null or undefined.

console.log(null >= 0); // true (null is treated as 0 in this comparison)
console.log(null > 0); // false (null is treated as 0 in this comparison)
console.log(null <= 0); // true (null is treated as 0 in this comparison)
console.log(null < 0); // false (null is treated as 0 in this comparison)
console.log(null == 0); // false (null is only loosely equal to undefined, not to 0)
console.log(null === 0); // false (null is not strictly equal to 0)     


//?? Nullish Operator
let amul = null;
let milk_required = amul ?? "heritage milk";
console.log("Milk required:", milk_required); // "Milk required: heritage milk" (because amul is null, so it returns the right-hand side operand)