//String Properties
let str = "Hello World";
console.log(str.length); //length always starts with 1, not 0  //11

//Access by index
console.log(str[0]); //H
console.log(str[6]); //W
console.log(str.at(-1)); //d
console.log(str.at(-4)); //o

//charAt method
console.log(str.charAt(0)); //H
console.log(str.charCodeAt(0)); //72 (ASCII code of H)