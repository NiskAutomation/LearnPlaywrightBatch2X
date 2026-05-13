// let is block scoped
let x = "glovbal"

if (true) {
//TDZ (Temporal Dead Zone) Concept starts here
//console.log(x); // ReferenceError:(NOT Global scope) Cannot access 'x' before initialization

    let x = "block scope";
    console.log(x); // block scope
}






// let is block scoped
//TDZ (Temporal Dead Zone)  happen with only let and const not with var
//let and const are not hoisted like var, they are in TDZ until they are declared
