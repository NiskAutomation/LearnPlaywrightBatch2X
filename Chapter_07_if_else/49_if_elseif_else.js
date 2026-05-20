// if-elseif-else statements

//syntax
// if (condition1) {
//     // code to execute if condition1 is true
// } else if (condition2) {
//     // code to execute if condition2 is true
// } else {
//     // code to execute if none of the conditions are true
// }

let score = 50;
if(score >= 90){
    console.log("Grade: A)");
}
else if(score >= 80){
    console.log("Grade:B");
}
else if(score >= 70){
    console.log("Grade: C");
}
else{
    console.log("Failed");
    console.log("Rewatch all videos and practice more and give the test again.");
}