let str = " Hello World";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str); //original string is not changed, strings are immutable
console.log(str.trim()); //remove whitespace from both ends

console.log(str.trimStart()); //remove whitespace from the start
console.log(str.trimEnd()); //remove whitespace from the end


let msg = "Test: FAIL. Retry: FAIL";
console.log(msg.replace("FAIL", "SUCCESS")); //replace only the first occurrence
console.log(msg.replaceAll("FAIL", "PASS")); //replace all occurrences

//concatination
let firstName = "Nishikant";
let lastName = "Pradhan";
let fullName = firstName + " " + lastName;
console.log(fullName);

let url = "https://app.vwo.com/api/login/retry=true";
console.log(url.replace("app", "staging")); //https://staging.vwo.com/api/login/retry=true

let result = "pass,fail,pass,pass,fail".split(",").join(" "); //split string into an array
console.log(result);

let parts = ["2026", "09", "15"];
let date = parts.join("-");
console.log(date); //2026-09-15