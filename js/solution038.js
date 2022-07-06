// GOAL: take in an int and square each digit in the int and concatenate them
// P: int
// R: int
// SOLUTION: convert the int into a string.
//           creat a variable to hold the answer.
//           loop through the digits of the string, convert that digit to an int, and square each digit and concatenate the answer to the variable
//           convert the answer back into an int

function squareDigits(num) {
    let currentString = num + ''
    let finalString = ''
    for(let i = 0; i < currentString.length; i++){
        finalString += Number(currentString[i]) ** 2
    }
    return Number(finalString)
}

console.log(squareDigits(9119)) // 811181