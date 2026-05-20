let value = "5";
switch(value){
    case 5:
        console.log("Number 5");
        break;
    case "5":
        console.log("String 5");
        break;
   
}

let staus = 0;
console.log( typeof staus); // number
switch(staus){
    case false:
        console.log("Status is false");
        break;
    case 0:
        console.log("Status is 0");
        break;
}