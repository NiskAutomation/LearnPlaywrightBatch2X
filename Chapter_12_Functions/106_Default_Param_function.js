function retry(testName, maxRetries, delay){
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms`)
}

retry("Login Test");
retry("Registeration", 5, 2000);