// TASK: pass in a number and return an array with elements starting from 0, accumulating by 1, until it reaches the length of the given number
// P: int (positive)
// R: array of ints
// SOLUTION:    create a loop that iterates N times
//              within each iteration, push the index into the final array

function arr(num) {
    let array = []
    for (let i = 0; i < num; i++) {
        array.push(i)
    }
    return array
}

