let order = new Promise(function(resolve,reject){
    let foodready = true;
    if(foodready){
        resolve("Pizza is deliver")
    }
    else{
        reject("order Cancelled")
    }
});

console.log(order);
//A Promise is an OBJECT. it wraps a value that will be availabe later.