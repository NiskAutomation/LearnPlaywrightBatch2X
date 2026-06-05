// Rest of the paramter 
function logResult(suiteName, ...results ){ //array of object
    console.log(suiteName);
    console.log(results);
}

logResult("Login Test", 1, 2, 3);
logResult("Register Test", "Hello" , "Nisk")