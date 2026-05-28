Promise.allSettled([
    Promise.resolve("Testcase A Passed.."),
    Promise.reject("Testcase B Failed "),
    Promise.resolve("Testcase C Paseed")
]).then(function(result){
    result.forEach(function( r, i){
        console.log("Testcase" + (i + 1), r.status, "_", r.value || r.reason);
    })
})