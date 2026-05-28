//When Step2 depends on Step1 result, you must run them sequential
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
    let r1 = await apiCall("Login")
    console.log(r1);
    let r2 = await apiCall("Dashboard")
    console.log(r2);
    let r3 = await apiCall("Report")
    console.log(r3);
    console.log("Time:~" + (Date.now() -start) + "ms")
}

sequential();