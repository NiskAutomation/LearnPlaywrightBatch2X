//Logical Operators
//&& (logical AND), 
// || (logical OR), ! (logical NOT)

let a = true;
let b = false;
console.log("a && b:", a && b); // false (both a and b need to be true for the result to be true)
console.log("a || b:", a || b); // true (at least one of a or b is true for the result to be true)

console.log("!a:", !a); // false (logical NOT of true is false)
console.log("!b:", !b); // true (logical NOT of false is true)

console.log("!(a && b):", !(a && b)); // true (logical NOT of false is true)
console.log("!(a || b):", !(a || b)); // false (logical NOT of true is false)