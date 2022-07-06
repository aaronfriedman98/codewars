// GOAL: take in a string and if it is a palindrome return true, otherwise return false
// P: string (case inse{nsitive)
// R: true or false
// SOLUTION: loop through every char in the string backwards and copy each char into a new string.
//           compare the 2 strings, if they are the same return true, if not return false

function isPalindrome(string){
    let compareString = ''
    for(let i = string.length-1; i >= 0; i--){
        compareString += string[i]
    }
    if(compareString.toLowerCase() === string.toLowerCase()){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindrome('hey')) // false
console.log(isPalindrome('Aviva')) // true