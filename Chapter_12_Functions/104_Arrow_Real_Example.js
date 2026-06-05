//if our statuscode >= 200 && our statuscode < 300
//normal function
function validateStatusCode(status){
    if(status >= 200 && status <= 300){
        console.log("Request is fine")
    }
}

//function as expression
const validateStatusCode_Exp = function(status){
    if(status >= 200 && status <= 300){
        console.log("Request is fine")
    }
}

//arrow function
const validateStatusCode_Arrow = (status) => {
    if(status >= 200 && status <= 300){
        console.log("Request is fine")
    }
}