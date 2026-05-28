let testRun = new Promise(function(resolve, reject){
    reject("Asseration failed")
});

testRun.then(function(msg){//Resolve
    console.log(msg);
}).catch(function(error){ //Reject
    console.log(error);
}).finally(function(){  // always execute
    console.log("i will be execute any how")
})