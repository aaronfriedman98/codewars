// GOAL: take in 3 numbers - start, end, and increment, and return the sum of the sequence
// P: 3 ints
// R: 1 int
// SOLUTION:    create an array to hold the sequence
//              create a loop that increments by the increment parameter and starts and ends with the parameters
//              push each index into the array
//              reduce the array into the sum of all its values and return it

function sequenceSum(start, end, accum) {
    let array = []
    for(let i = start; i <= end; i += accum) {
        array.push(i)
    }
    return array.reduce((acc,i) => acc + i)
}

console.log(sequenceSum(1,10,2)) // 25
