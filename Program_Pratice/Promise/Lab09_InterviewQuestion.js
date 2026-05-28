// let p = new Promise(function(resolve, reject){
//     resolve(42);
// })
// p.then(function(value){
//     console.log("Answer", value)
// })

let p = new Promise(function(resolve, reject){
    reject("something break");
})

p.catch(function(err){
    console.log("caught", err)
})