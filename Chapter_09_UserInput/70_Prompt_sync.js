const prompt = require("prompt-sync") ();

let num = Number(prompt("Enter a number:"))

if(num % 2 ===0){
    console.log("Even")
 }
 else{
    console.log("odd")
 }