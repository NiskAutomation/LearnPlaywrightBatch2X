//checking arrays
//check if something is array
let result = Array.isArray([1, 2, 3])
console.log(result);
let result1 = Array.isArray("a");
console.log(result1);

//evry & some
[80, 90, 85].every(s => s >= 7); // true
[80, 60, 85].every(s => s >= 7); // false