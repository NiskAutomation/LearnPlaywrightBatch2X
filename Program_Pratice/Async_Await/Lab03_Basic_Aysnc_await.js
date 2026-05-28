async function getTestResults() {
    return "Pass"
}

//async function ALAWYS returns a Promise
getTestResults().then(function(results){
    console.log(results);
})

async function runTest() {
    let results = await Promise.resolve("Login test passed");
    console.log(results);
    let results2 = await Promise.resolve("Dashboard test passesd");
    console.log(results2)
}

runTest();