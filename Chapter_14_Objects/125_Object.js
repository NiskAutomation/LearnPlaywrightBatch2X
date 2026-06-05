let student1 = {name : "Nishikant", age : 30, city : "Hyderabad"};
let student2 = {name : "Amit"};

//rule: key will not in double quotes, value will be in double quotes if it is a string, if it is a number then no quotes, if it is a boolean then no quotes, if it is an array then no quotes, if it is an object then no quotes

let a = {status : "pass"};
console.log(a.status);
console.log(a["status"]);


let a1 = {status : "pass"};
console.log(a1.status);


let b = a ;
b.status = "fail";
console.log(a.status); //fail
console.log(b.status); //fail