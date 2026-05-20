const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
 let num = Number(input);
 if(num % 2 ===0){
    console.log("Even")
 }
 else{
    console.log("odd")
 }

    rl.close
});
