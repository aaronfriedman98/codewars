// GOAL: take in an array of ints and multiple them together in order and return the product
// P: array of ints
// R: int
// SOLUTION: create a counter variable, loop through the array and multiple each element

function grow(array){
    const product = array.reduce((acc, i) => {
        return acc * i
    },1)
    return product
}

console.log(grow([1,2,3,4,5])) // 120
console.log(grow([1,2,3,4,-4])) // -96
