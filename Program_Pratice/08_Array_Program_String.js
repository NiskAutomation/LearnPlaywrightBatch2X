//remove array element from string
let arr = ['g', 'e', 'e', 'k', 's', 'f', 'o', 'r', 'g', 'e', 'e', 'k', 's'];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); ['g', 'e', 'k','s', 'f', 'o', 'r']

//find dupliacte array element
let arr2 = ['g', 'e', 'e', 'k', 's', 'f', 'o', 'r', 'g', 'e', 'e', 'k', 's'];
let duplicates = arr2.filter((item, index) => arr2.indexOf(item) !== index);
console.log([...new Set(duplicates)]); // Output: [ 'e', 'g', 'k', 's' ]

//find non-repeated element from array
let arr3 = ['g', 'e', 'e', 'k', 's', 'f', 'o', 'r', 'g', 'e', 'e', 'k', 's'];
let nonRepeated = arr3.filter(item => arr3.indexOf(item) === arr3.lastIndexOf(item));
console.log(nonRepeated); // Output: [ 'f', 'o', 'r' ]