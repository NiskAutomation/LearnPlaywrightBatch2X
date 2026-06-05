function runWithLoggin(testFn, testName){
    console.log(`starting ${testName}`);
    let result = testFn();
    console.log(`finished : ${testName} - ${result}`)
   return result;
}

function LoginTest(){
    return "pass"
}

function LoginTestFailed(){
    return "fail"
}


runWithLoggin(LoginTest, "Login Test")
runWithLoggin(LoginTestFailed, "Dashboard Failed Test")