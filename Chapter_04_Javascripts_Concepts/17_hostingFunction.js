function getUserStatus(){ // JS Engine 
    //var status_code ; JS Engine (optimized code)
    console.log(status_code); // Output: undefined (due to hoisting of variable declaration)
    var status_code = 'active'; // assignment happens here
    console.log(status_code); // Output: active
}

getUserStatus();

// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.