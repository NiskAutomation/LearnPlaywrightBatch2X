function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true


// palindrome without using built in functions and reverse method
function isPalindromeWithoutBuiltIn(str) {
    let reversed = ''; 
    for(let i = str.length -1 ; i >= 0; i--){
        reversed += str[i];
    }
    return str === reversed;
}
console.log(isPalindromeWithoutBuiltIn("madam")); // Output: true