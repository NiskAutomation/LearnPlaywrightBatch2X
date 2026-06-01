//Pure Function
function calculatePassRate(total, passed){
    return ((passed/total) * 100).toFixed(2);

}
console.log(calculatePassRate(10, 7))


//Inpure Functiom
function isPassing(score){
    return score >= threshold;
}

let threshold = 50;
console.log(isPassing(threshold));