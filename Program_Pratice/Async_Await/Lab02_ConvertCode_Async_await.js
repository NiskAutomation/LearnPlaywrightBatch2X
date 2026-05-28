function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser Opened")
    });
};

function goToLogin(){
    return new Promise(function(resolve){
        resolve("Login Page loaded...")
    })
}

function enterCredentails(){
    return new Promise(function(resolve){
        resolve("credentails Enter")
    })
}

function clickLogin(){
    return new Promise(function(resolve){
        resolve("login Sucessfully");
    });
};

// openBrowser().then(function(msg){
//     console.log("Step 1", msg);
//     return goToLogin();
// }).then(function(msg){
//     console.log("Step 2:", msg);
//     return enterCredentails();
// }).then(function(msg){
//     console.log("Step 3:", msg);
//     return clickLogin();
// }).then(function(msg){
//      console.log("Step 4: ", msg);
// }).catch(function(error){
//     console.error("error message:", error)
// }).finally(function(){
//     console.log("execution DONE")
// })


async function runLoginFlow(){
    let msg1 = await openBrowser();
    console.log("Step1:", msg1)
    let msg2 = await goToLogin();
    console.log("Step2:", msg2)
    let msg3 = await enterCredentails();
    console.log("Step3:", msg3);
    let msg4 = await clickLogin();
    console.log("Step4:", msg4);

}
runLoginFlow();