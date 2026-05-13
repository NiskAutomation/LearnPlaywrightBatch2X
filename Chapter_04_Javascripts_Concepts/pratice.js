var a = 10;
let b = 20;
const c = 30;

console.log('Global scope - a:', a); // Output: 10
console.log('Global scope - b:', b); // Output: 20
console.log('Global scope - c:', c); // Output: 30

{
    var a = 40; // redeclaring and reassigning the global variable 'a' within the block scope
    let b = 50; // block-scoped variable 'b' is different from the global 'b'
    const c = 60; // block-scoped constant 'c' is different from the global 'c'
}

console.log('Block scope - a:', a); // Output: 40 (var 'a' is function-scoped, so it affects the global 'a')
console.log('Block scope - b:', b); // Output: 50 (let 'b' is block-scoped, so it does not affect the global 'b')
console.log('Block scope - c:', c); // Output: 60 (const 'c' is block-scoped, so it does not affect the global 'c')

{
    let x = 100; // block-scoped variable 'x'
}
console.log('Accessing block-scoped variable x:', x); // Output: ReferenceError: x is not defined, because 'x' is block-scoped and not accessible outside the block