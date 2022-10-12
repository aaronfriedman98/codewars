// TASK: given an array of ints, return the int that appears an odd number of times
// SOLUTION:    identify the first number of the array and loop through the entire array keeping a count of how many times that number is listed
//              if that number is odd then return it, otherwise, move to the next number of the array

function findOdd(array) {
    let count = 0
        for (let i = 0; i < array.length; i++) {
            count=0;
            for (let j = 0; j < array.length; j++) {
                if (array[i] === array[j]) {
                    count++
                }
            }
            if (count % 2 === 1) {
                return array[i]
            }
        }
    }


console.log(findOdd([1,1,2,3,3,4,4])) // 2
console.log(findOdd([1,2,1,2,3])) // 3