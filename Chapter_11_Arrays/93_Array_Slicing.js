//slicing and combining
let arr = [1, 2, 3, 4, 5];
//rule: slice (start, end) - return new array, does not mute actual ->(start, end -1) ,index = 0
// console.log(arr.slice(2,4)); //(start, end -1);

// console.log(arr.slice(2,5));
// console.log(arr.slice(-2));

console.log(arr.slice(0))

let arr1 = [10, 20, 30, 40, 50];
let removed = arr1.splice(1,2);
console.log(removed);
console.log(arr1);