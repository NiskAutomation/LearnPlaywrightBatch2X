// Iterate -Go from one to another
let tests = ['login', 'checkout', 'search'];
 for(let i = 0; i < tests.length; i++){
    console.log(tests[i]);
 }

console.log("----------------------------------")
 //for..of (cleanest the value);
 for(test of tests){
    console.log(test);
 }
console.log("----------------------------------")

//forEach loop>
tests.forEach((test, index) => {
    console.log(test, index);
})
console.log("----------------------------------")

let students = ['methis', 'seniths', 'ajay', 'nisk'];
for(let stud in students){
    console.log(stud , "->", students[stud])
}

console.log("----------------------------------")

for(let [i, test] of tests.entries()){
    console.log(i, test)
}