//remove duplicate element from array
let arr = [1, 2, 3, 4, 5, 1, 2, 3];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

//find duplicate element from array
let arr2 = [1, 2, 3, 4, 5, 1, 2, 3];
let duplicates = arr2.filter((item, index) => arr2.indexOf(item) !== index);
console.log([...new Set(duplicates)]); // Output: [1, 2, 3]

//find non-repeated element from array
let arr3 = [1, 2, 3, 4, 5, 1, 2, 3];
let nonRepeated = arr3.filter(item => arr3.indexOf(item) === arr3.lastIndexOf(item));
console.log(nonRepeated); // Output: [4, 5]