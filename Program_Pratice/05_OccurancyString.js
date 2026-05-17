function OccurancyString(str) {
    let count = {};
    for(const char of str){
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

console.log(OccurancyString("geeksforgeeks")); // Output: { g: 2, e: 4, k: 2, s: 2, f: 1, o: 1, r: 1 }


function OccurancyString(str) {
    let count = {};
    for(const char of str){
        count[char] = (count[char] || 0) + 1;
    }
    for(const char in count){
        console.log(`${char}: ${count[char]}`);
    }
    return count;
}

OccurancyString("geeksforgeeks"); // Output: { g: 2, e: 4, k: 2, s: 2, f: 1, o: 1, r: 1 }