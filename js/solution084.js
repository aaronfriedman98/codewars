// TASK: pass in a string and if it contains an odd amount of letter then return the middle letter, if it contains even then return the middle 2
// SOLUTION:    first determine whether the string is even or odd
//              odd: find the length and create a var of index that holds the length - 1 / 2 and return string[index]
//              even: find the length and create a var of index that holds the legnth - 1 / 2 and splice the string from index and index+1

function getMiddle(string) {
    let length = string.length
    let index = (length - 1) / 2

    if (length % 2) {
        return string[index]
    }
    else if (length % 2 === 0) {
        return string.split('').splice(index, 2).join('')
    }
}


console.log(getMiddle("tes")) // "e"
console.log(getMiddle("test")) // "es"