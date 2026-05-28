
function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name, "200 OK!")  
        }, 1000)
    })
}

async function sequential() {
    console.log("starting of the test")
    let start = Date.now();
    let[r1, r2, r3] = await Promise.all([
        apiCall("Auth Service"),
        apiCall("User Server"),
        apiCall("Payment Server")
    ])
    console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log("Time:~" + (Date.now() -start) + "ms")
}

sequential();