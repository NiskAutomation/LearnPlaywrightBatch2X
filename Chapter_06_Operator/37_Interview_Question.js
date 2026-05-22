console.log(0 == ""); // true (0 is loosely equal to an empty string)
console.log(0 === ""); // false (0 is not strictly equal to an empty string)
console.log(false == 0); // true (false is loosely equal to 0)
console.log(false === 0); // false (false is not strictly equal to 0)
console.log(null == undefined); // true (null is loosely equal to undefined)
console.log(null === undefined); // false (null is not strictly equal to undefined)
console.log(NaN == NaN); // false (NaN is not equal to anything, including itself)
console.log(NaN === NaN); // false (NaN is not strictly equal to anything, including itself)

console.log("" == "0"); // true (an empty string is loosely equal to "0")
console.log("" === "0"); // false (an empty string is not strictly equal to "0")

