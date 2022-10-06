// TASK: pass in 2 strings and if the first string ends with the contents of the 2nd string then return true, otherwise false
// SOLUTION:    check how many characters the 2nd string is made up of
//              create a for loop that runs the length of the 2nd string
//              check if each char at a time if they match and return true or false

function solution(first, second) {
    for (let i = 1; i <= second.length; i++) {
        if (first[first.length-i] !== second[second.length-i]) {
            return false
        }
    }
    return true
}

console.log(solution('frand', 'and')) // true
console.log(solution('frand', 'dand')) // false