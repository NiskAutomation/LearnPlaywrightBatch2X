//checking arrays
//check if something is array
let result = Array.isArray([1, 2, 3])
console.log(result);
let result1 = Array.isArray("a");
console.log(result1);

//evry & some
[80, 90, 85].every(s => s >= 7); // true
[80, 60, 85].every(s => s >= 7); // false

//playwright API
[200, 201, 202].every(statuscode => statuscode > 200);


//some - at least one must pass
[80, 60, 95].some(s => s < 70); //true
[80, 90, 95].some(s => s < 70); //false


// s => s >= 70, firts s as paramter , then arrow function then condition