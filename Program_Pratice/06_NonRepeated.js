function NonRepeated(str) {
    let count = {};
    let result = '';
    for(const char of str){
        count[char] = (count[char] || 0) + 1;
    }
    for(const char in count){
       if(count[char] ===1){
        result += char;
       }
    }
    return result;
}
console.log(NonRepeated("geeksforgeeks")); // Output: for