function findDuplicate(str) {
    let seen = '', dup ='';
    for(const char of str){
        if(seen.includes(char)){
            if(!dup.includes(char)){
                dup += char;
            }
        }
        seen += char;
    }
    return dup;
}
console.log(findDuplicate("geeksforgeeks")); // Output: egks