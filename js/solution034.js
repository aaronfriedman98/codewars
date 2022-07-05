// GOAL: take in an array of ints and return the index of the value that all of the elements values to the left of it equal all of the value
//       of the elements to the right of it. If there is no such index, then return -1
// P: array of ints
// R: index or -1 (int)
// SOLUTION: loop through each element of the array, in each iteration slice all the left elements and right elements and compare the sums
//           if at any point it is equal then return that index, if none are equal then return -1

function findEvenIndex(array){
    for(let i = 0; i < array.length; i++){
        let left = array.slice(0, i)
        let right = array.slice(i+1, array.length)
        let sumLeft = 0
        let sumRight = 0
        for(let i = 0; i < left.length; i++){
            sumLeft += left[i]
        }
        for(let i = 0; i < right.length; i++){
            sumRight += right[i]
        }
        if (sumLeft === sumRight){
            return i
        }
    }
    return -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1])) // 3
console.log(findEvenIndex([1,2,3,4,5,6])) // -1
console.log(findEvenIndex([20,10,30,10,10,15,35])) // 3

