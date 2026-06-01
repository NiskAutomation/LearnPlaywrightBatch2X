function makeRetryTraker(max){
    let attempts = 0;
    function tryAgain(testName){
        attempts++;
        if(attempts > max){
            return ` ${testName} Exceed the Attemps ${max}`
        }
        return `Attemps ${attempts}/${max} for ${testName}`
    }
    return tryAgain;
}

let retry = makeRetryTraker(3);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));