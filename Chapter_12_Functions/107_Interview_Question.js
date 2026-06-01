function runTest(name, status, duration){
    return `${name} : ${status} (${duration}ms)`
}
const result = runTest("Login", "Pass", 320);
console.log(result)