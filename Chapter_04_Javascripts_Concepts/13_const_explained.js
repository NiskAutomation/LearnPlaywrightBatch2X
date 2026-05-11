const BASE_URL = 'https://api.example.com/data'; // This is a constant variable that cannot be reassigned
// const BASE_URL = 'https://api.example.com/other-data'; // SyntaxError: Identifier 'BASE_URL' has already been declared
// BASE_URL = 'https://api.example.com/other-data'; // TypeError: Assignment to constant variable.

const name = 'pending';
console.log(name);
// name = 'done'; // TypeError: Assignment to constant variable.

{
    let name = 'Nishikant'; // This 'name' is block-scoped to this block
    console.log(name);
}

function say(){
    let name = 'Nishikant'; // This 'name' is function-scoped to this function
    console.log(name);
}
say()
say()

// const == loyal, trustworthy, unchangeable, constant

// const = constant, unchangeable, loyal, trustworthy