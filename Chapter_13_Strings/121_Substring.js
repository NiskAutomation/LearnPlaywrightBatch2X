//substring(startIndex, endIndex) - returns a substring from startIndex to endIndex (not inclusive)
let str = "Login_Test_Pass_001";
console.log(str.substring(0,5)); //Login
console.log(str.slice(0,5)); //Login
console.log(str.substring(6,10)); //Test
console.log(str.substring(11,15)); //Pass
console.log(str.substring(16)); //001


let testNumber = str.slice(-3); //001
console.log(testNumber);

//substring vs slice
let str2 = "Hello World";
console.log(str2.substring(0,5)); //Hello
console.log(str2.slice(0,5)); //Hello
console.log(str2.substring(6,11)); //World
console.log(str2.slice(6,11)); //World
console.log(str2.substring(-5, 5)); //Hello (negative index is treated as 0)
console.log(str2.slice(-5, 5)); // (negative index is treated as 0) empty string
console.log(str2.substring(5, 0)); //Hello (start and end are swapped)
console.log(str2.slice(5, 0)); // (start and end are not swapped) empty string
