 if ("hello") console.log("String is truthy");
 if(45) console.log("Number is truthy");
 if(true) console.log("Boolean true is truthy");
 if(false) console.log("Boolean false is falsy");
 if({}) console.log("Empty object is truthy");
 if([]) console.log("Empty array is truthy");
 if(null) console.log("null is falsy");
 if(undefined) console.log("undefined is falsy");
 if(NaN) console.log("NaN is falsy");
 if("") console.log("Empty string is falsy");

 let name = undefined;
 if(name){
    console.log("Hiii")
 }
 else{
    console.log("Byee")
 }