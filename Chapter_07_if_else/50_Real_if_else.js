//viewer -> editor -> admin
let isLoggedIn = true;
let userRole = "editor";

if(isLoggedIn){
    if(userRole === "admin"){
        console.log("admin can do all the things");
    }
    else if(userRole === "editor"){
        console.log("editor can edit access granted");
    }
    else{
        console.log("viewer can only view  and read access granted");
    }
}
else{
    console.log("you are not logged in, please log in to access the content");
}