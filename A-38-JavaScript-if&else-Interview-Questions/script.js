//  ========================== Example 1 =======================
function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        return "Palindrome";
    } else {
        return "Not a Palindrome";
    }
}

console.log(isPalindrome("madam")); // "Palindrome"
console.log(isPalindrome("hello")); // "Not a Palindrome"
