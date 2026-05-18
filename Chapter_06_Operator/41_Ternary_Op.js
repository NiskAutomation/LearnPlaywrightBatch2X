//Ternary Operator
let rajkumar_age = 18;
let raj_will_goa = rajkumar_age >= 18 ? "Raj will go to Goa" : "Raj will not go to Goa";
console.log(raj_will_goa); // Output: "Raj will go to Goa"


let actualStatus = 200;
let expectedStatusCode = 200;
let testResult = actualStatus === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log("Test Result:", testResult); // Output: "Test Result: PASS"


let environment = "staging";
let baseUrl = environment === "production" ? "https://api.production.com" : "https://api.staging.com";
console.log("Base URL:", baseUrl); // Output: "Base URL: https://api.staging.com"`

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Browser Mode:", browserMode); // Output: "Browser Mode: headless"


let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "✅ SLA Met" : "❌ SLA Breached";
console.log("SLA Status:", slaStatus); // Output: "SLA Status: SLA Met"


let condtion = true;
let isSkMale = condtion ? "true" : "false";
console.log(isSkMale); // Output: "SK is    Male"
//condition ? value_if_true : value_if_false

//Nested Ternary Operator
// condition1 ? value_if_true : condition2 ? value_if_true : value_if_false
//Multiple conditions can be handled using nested ternary operators, but it can make the code less readable, so use it with caution.
let age = 26;
let is_nishikant_goa = age > 26 ? " Yes Nishikant will go to Goa" :" Nishikant will not go to Goa";
console.log(is_nishikant_goa); // Output: "Nishikant will not go to Goa"

let age_nishikant = 30;
let is_nishikant_drink = age_nishikant > 18? (age_nishikant > 26? "DRINK" : "NOT DRINK") : "NOT GOA False";
console.log(is_nishikant_drink); // Output: "GOA True"

 
//---------------------------Interview Question---------------------------
let statusCode = 404;;
let category = 
    statusCode < 300 ? "Success" :
    statusCode < 400 ? "Redirection" :
    statusCode < 500 ? "Client Error" : "Server Error";
console.log("Category:", category); // Output: "Category: Client Error"


//find greater number between two numbers using ternary operator
let a = 10, b = 5, c = 8;
let result = a > b ? (a > c ? "a is greatest" : "c is greatest") : (b > c ? "b is greatest" : "c is greatest");
console.log(result); // Output: "a is greatest"


//maxiumum number between two numbers using ternary operator
let num1 = 15, num2 = 20;
let max = num1 > num2 ? num1 : num2;
console.log("Maximum number is:", max); // Output: "Maximum number is: 20"


//maxiumum number between three numbers using ternary operator
let x = 15, y = 20, z = 25;
let maxThree = x > y ? (x > z ? "x is maximum" : "z is maximum") : (y > z ? "y is maximum" : "z is maximum");
console.log(maxThree); // Output: "z is maximum"


let temp = 30;
let feel = (temp>= 40) ? "Very Hot" :
              (temp >= 30) ? "Hot" :
                (temp >= 20) ? "Warm" :
                    (temp >= 10) ? "Cool" : "Cold";
console.log("Temperature feels:", feel); // Output: "Temperature feels: Hot"