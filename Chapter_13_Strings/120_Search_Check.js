//Searching  and checking for a string
let url = "https://staging.vwo.com/api/login/retry=true";

//includes
console.log(url.includes("staging")); //true
console.log(url.includes("production")); //false

//startsWith
console.log(url.startsWith("https")); //true
console.log(url.startsWith("http//")); //false
console.log(url.startsWith("true")); //false

//endsWith
console.log(url.endsWith("retry=true")); //true
console.log(url.endsWith("retry=false")); //false

//indexOf
console.log(url.indexOf("a")); //10
console.log(url.indexOf("z")); //-1
console.log(url.indexOf("retry=true")); //35


//searching for a string in an array
console.log(url.search(/login/)); //28  //regex expression
console.log(url.search(/retry/)); //35
console.log(url.search(/abc/)); //-1

