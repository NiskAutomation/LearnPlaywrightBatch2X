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

openBrowser().then(function(msg){
    console.log("Step 1", msg);
    return goToLogin();
}).then(function(msg){
    console.log("Step 2:", msg);
    return enterCredentails();
}).then(function(msg){
    console.log("Step 3:", msg);
    return clickLogin();
}).then(function(msg){
     console.log("Step 4: ", msg);
}).catch(function(error){
    console.error("error message:", error)
}).finally(function(){
    console.log("execution DONE")
})

let goToLogin = openBrowser().then(function(msg){
    console.log(msg);
})

let enterCredentails = goToLogin.then(function(msg){
    console.log(msg);
})
