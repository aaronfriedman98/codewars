// TASK: given an array of at least 4 ints, return the sum of the 2 lowest ints
// SOLUTION:    create variables to hold the 2 lowest ints in the array
//              now to find those 2 numbers: first find the lowest one
//              assign the first value of the array to the lowest var and loop through the rest of the array searching for anything lower
//              splice that value out of the array and assign the first value of the array to the next var and again search for the lowest.
//              return the sum

function sumTwoSmallestNumbers(array) {
    let lowest = array[0]
    for(let i = 0; i < array.length; i++) {
        if(lowest > array[i]) {
            lowest = array[i]
        }
    }
    array.splice(array.indexOf(lowest),1)
    let nextLowest = array[0]
    for(let i = 0; i < array.length; i++) {
        if(nextLowest > array[i]) {
            nextLowest = array[i]
        }
    }
    return lowest + nextLowest
}


console.log(sumTwoSmallestNumbers([4,6,2,7,3,1,4])) // 3