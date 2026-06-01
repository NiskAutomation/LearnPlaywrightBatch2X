// Arrow  Function (ES6)
const greet = function(name1){
    return "Hi " + name1;
}

let result = greet("Nisk");
console.log(result);

const greet2 = (name1) => name1;
let result2 = greet("Nisk");
console.log(result2);


const doubleIt = n => n * 2;
console.log(doubleIt(4));

const printIt = name => console.log(name);
printIt("Nishikant")