//Comparison Operators   // alawys return a boolean value (true or false)
//>, <, >=, <=, ==, ===, !=, !==
// = is an assignment operator, not a comparison operator. It assigns the value on the right to the variable on the left.
//==  loose comparison operator, it compares values for equality after performing type coercion if necessary. It does not consider the data type of the operands.
//=== strict comparison operator, it compares both the value and the data type of the operands for equality. It does not perform type coercion.
console.log(3 > 4); // false, because 3 is not greater than 4
console.log(5 < 10); // true, because 5 is less than 10
console.log(7 >= 7); // true, because 7 is equal to 7
console.log(8 <= 6); // false, because 8 is not less than or equal to 6
console.log(10 == '10'); // true, because == performs type coercion and considers 10 and '10' as equal
console.log(10 === '10'); // false, because === does not perform type coercion and considers 10 (number) and '10' (string) as different
console.log(5 != '5'); // false, because != performs type coercion and considers 5 and '5' as equal
console.log(5 !== '5'); // true, because !== does not perform type coercion and considers 5 (number) and '5' (string) as different



