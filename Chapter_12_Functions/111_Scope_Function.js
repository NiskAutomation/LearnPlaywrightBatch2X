//scope in function

let env = "staging"; //global scope

function setupConfig(){
    let timeout = 3000; //local scope
    console.log(env); //can access global
    console.log(timeout); // can acccess local
}

setupConfig();
console.log(env);
console.log(timeout);