//error handling - try catch
//with promise use .catch();
//with async/await you can use the .catch() - exactly like regular javascript error handling.


async function testAPI() {
    try{
        let result = await  Promise.reject("503 Service Unavaliable")
        console.log(result);
    }catch(error){
        console.log("ERROR" , error)
    }finally{
        console.log("Clean up")
    }
    
}
testAPI();

//try/catch/finally maps dircetly to .then()/.catch()/.finally() - same logic, cleaner syntax