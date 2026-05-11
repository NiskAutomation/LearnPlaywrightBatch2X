var a = 10; //global variable/Scope


//var is a function scoped
function printHello(){
    console.log('Hello Nishikant');
    var a = 20; //local variable/Scope
    console.log('Value of a inside function:', a);
    if(true){
        var a = 30; //redeclaring and reassigning the same variable 'a' within the function scope
        console.log('Value of a inside if block:', a);
    }
}

printHello();
var a = 40; //redeclaring and reassigning the global variable 'a'

// var == trump, flipper, dual faced, no trust worthy