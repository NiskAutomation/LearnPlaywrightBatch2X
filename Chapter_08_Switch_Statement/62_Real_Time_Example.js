//API Validation using Switch Statement
let statusCode = 404;
switch(statusCode){
    case 200:
        console.log("Success");
        break;
    case 404:
        console.log("Not Found");
        break;
    default:
        console.log("No status code matched");
}