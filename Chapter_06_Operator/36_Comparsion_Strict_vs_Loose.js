// number == string
console.log(10 == '10'); // true, because == performs type coercion and considers 10 and '10' as equal

// number === string
console.log(10 === '10'); // false, because === does not perform type coercion and considers 10 (number) and '10' (string) as different

console.log(42 == '45'); // false, because 42 and '45' are not equal even after type coercion

console.log( 5 === 5); // true, because both value and type are the same (number)
console.log( 5 === '5'); // false, because value is the same but type is different (number vs string)
console.log( 5 == 5); // true, because == performs type coercion and considers 5 and '5' as equal


console.log(0 == ""); // true, because == performs type coercion and considers 0 and "" as equal
console.log(0 === ""); // false, because === does not perform type coercion and considers 0 (number) and "" (string) as different

console.log(false == 0); // true, because == performs type coercion and considers false and 0 as equal
console.log(false === 0); // false, because === does not perform type coercion and considers false (boolean) and 0 (number) as different    

console.log(null == undefined); // true, because == performs type coercion and considers null and undefined as equal
console.log(null === undefined); // false, because === does not perform type coercion and considers null (object) and undefined (undefined) as different

console.log(NaN == NaN); // false, because NaN is not equal to anything, including itself
console.log(NaN === NaN); // false, for the same reason as above

console.log(0 == ""); // true, because == performs type coercion and considers 0 and "" as equal
console.log(0 === ""); // false, because === does not perform type coercion and considers 0 (number) and "" (string) as different   
console.log("" == "0"); // true, because == performs type coercion and considers "" and "0" as equal
console.log("" === "0"); // false, because === does not perform type coercion and considers "" and "0" as different (both are strings but have different values)
