function outer(){
    let message = "hello";
    console.log("Outer called")

    function inner(){
        console.log(message);
    }
    return inner;
}

let fn_inner = outer();
fn_inner();