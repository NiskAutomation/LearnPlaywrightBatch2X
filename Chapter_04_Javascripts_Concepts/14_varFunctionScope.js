var a = 10; // global variable
console.log('Global scope - a:', a); // Output: 10

//defining a function
function printHello(){
    console.log('Hello Nishikant');
    var a = 20; // local variable with the same name as the global variable
    console.log('Value of a inside function:', a); // Output: 20
    if(true){
        var a = 30; // redeclaring and reassigning the same variable 'a' within the function scope
        console.log('Value of a inside if block:', a); // Output: 30
    }
    console.log('Value of a after if block:', a); // Output: 30
}
printHello();