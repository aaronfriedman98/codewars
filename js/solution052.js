// TASK: take in an array, find the first longest string when combining each element with n consecutive elements
// P: array, int (list of strings, and the number of consecutive elements to test)
// R: string
// SOLUTION:    
//              create an int var to hold the largest string, and assign it array[0] + array[1]
//              loop through the array.length, then a nested loop that iterates n times
//              within the nested loop, concatenate array[i+n] and array[i+n+1] and check if its length is > than the length of largestString var
//              if yes, then assign that concatenated string to the largestString var
//              return the solution

function longestConsec(array, n) {
    let largestString = array[0] + array[1]
    for(let i = 0; i < array.length; i++){
        if(array.slice(i,n).length > largestString.length) {
            largestString = array.slice(i,n).length
        }
    }
    return largestString
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) // "abigailtheta"