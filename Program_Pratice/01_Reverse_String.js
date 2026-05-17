function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Nishikant Pradhan")); // Output: nahdarp tnahsihN


// reversestring without using built in functions and reverse method
function reverseStringWithoutBuiltIn(str) {
    let reversed = '';
    for(let i = str.length -1 ; i >= 0; i--){
        reversed += str[i];

    }
    return reversed;
}
console.log(reverseStringWithoutBuiltIn("Nishikant Pradhan")); // Output: nahdarp tnahsihN


//reverse each word in the string
function reverseEachWord(str) {
    let words = str.split(' ');
    let reversedwords = words.map(word => word.split('').reverse().join('')).join(' ');
    return reversedwords;
}
console.log(reverseEachWord("Nishi kant Pradhan")); // Output: ihsiK tnak nahdarp