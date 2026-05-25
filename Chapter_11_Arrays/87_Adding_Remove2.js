let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

//splice(start, deleteCount,...itemsToAdd)
// arr.splice(2, 2);
// console.log(arr);

arr.splice(2, 0, 99); // index : delete : add 
console.log(arr); //[1, 2, 99, 3, 4, 5,  6]
