//let - blocked scope variable declaration
let a = 10;
let retryCount = 0;
retryCount = retryCount + 1; // reassigning a new value to retryCount
retryCount = retryCount + 1; // reassigning a new value to retryCount
console.log('reAttempt:', retryCount); // Output: 2


// // ❌ SyntaxError: redeclaration not allowed
// let retryCount = 5; // Error: Identifier 'retryCount' has already been declared
// let retryCount = 5; // SyntaxError: Identifier 'retryCount' has already been declared

let testStatus = 'Pending';
if (testStatus === 'Pending') {
    let exectionTime = 2000; // exectionTime is only accessible within this block
    console.log('Test is pending, execution time:', exectionTime);
}
console.log(exectionTime) //❌ ReferenceError: exectionTime is not defined, because it's block-scoped to the if statement


// {} - Block 
// if(){} 
// funcion name(){}


// let = loyal
// var = varirable / triator