// TASK: pass in an array and a number, and return an array with n number of elements of the original array
// SOLUTION:    slice the array

function take(array, n) {
    return array.slice(0,n)
}


console.log(take([2,5,1,3,5,3], 3)) // [2,5,1]