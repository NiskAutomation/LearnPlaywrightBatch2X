//Creating Arrays  //Arrays Literals
let browser = ["chrome", "firefox", "safari"];


//Array Constructor
let scores = new Array(3);
scores[0] = 1;
scores[1] = 1;
scores[2] = 1;
let scores2  = new Array(1, 2, 3);
console.log(scores); //[ <3 empty items> ]
console.log(scores2);


let numbers = new Array(100, 200, 300, 400); //0-3 : 4
console.log(numbers)

//Array.of
let test = Array.of(10, 20, 30, 40, 50);
console.log(test)

//Array.from()
let chars = Array.from("nishikant");
console.log(chars);// ['n', 'i', 's', 'h', 'i', 'k', 'a', 'n', 't']

let digits = Array.from("12345678");
console.log(digits); // ['1', '2', '3','4', '5', '6','7', '8']