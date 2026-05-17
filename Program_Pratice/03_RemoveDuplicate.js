function removeDuplicate(str){
    let dup = '';
    for(const char of str){
        if(!dup.includes(char)){
             dup += char;
        }
    }
    return dup;
}
console.log(removeDuplicate("geeksforgeeks")); // Output: geksfor


//