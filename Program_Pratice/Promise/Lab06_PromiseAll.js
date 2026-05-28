let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCache = Promise.resolve("Cache Ok")

Promise.all([checkAuth, checkDB, checkCache]).then(function (result){
    console.log("All checks", result)
});


Promise.all([
    Promise.resolve("ok"),
    Promise.resolve("DB"),
    Promise.resolve("ok")
]).then(function(r){
    console.log(r);
   }).catch(function(err){
    console.log("Failed:", err)
   })