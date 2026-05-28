// async function sayHello(){
//     return "Hello QA"
// }

// sayHello().then(function(msg){
//     console.log(msg);
// })


// async function getStatus() {
//     let status = await Promise.resolve(200);
//     console.log("Status Code:", status)
    
// }
// getStatus();

// async function testFlow() {
//     let step1 = await Promise.resolve("Opened Browser");
//     console.log(step1);  
//     let Step2 = await Promise.resolve("Clicked Login");
//     console.log(Step2); 
//     let Step3 = await Promise.resolve("Verified dashboard");
//     console.log(Step3); 
// }

// testFlow();

// async function riskyTest() {
//     try{
//         let data = await Promise.reject("Element Not Found");
//         console.log(data);
//     } catch(error){
//         console.log("Error:" ,error)

//     } finally{
//         console.log("Test Complete")
//     }
// }
// riskyTest();

// async function apiTest() {
//     try{
//         let response = await Promise.resolve({status : 201, body : "created"});
//         console.log("Status:", response.status);
//         console.log("Body:" , response.body);
//     }catch(err){
//         console.log("Error", err)
     
//     }finally{
//         console.log("Test Complete")
//     }
// }

// apiTest();

// console.log("A")
// async function test() {
//     console.log("B");
//     await Promise.resolve();
//     console.log("C")
    
// }
// test();
// console.log("D")


async function runAll() {
    let[a, b, c] = await Promise.all([
        Promise.resolve("Login OK"),
        Promise.resolve("Cart Ok"),
        Promise.resolve("Checkout Ok")
    ]);
    console.log(a);
    console.log(b);
    console.log(c);
    
}
runAll();


