let config = {};
config.browser = "chrome";
config.timeout = 5000;
config.testName = "Login Test";

console.log(config);

if(config.browser === "chrome"){
    console.log("Running on chrome");
}