// TASK: given a list of the same numbers, return the one unique number
// P: array of numbers
// R: numuber
// SOLUTION:    first find the common number: 
//              create a var to hold the common number
//              create a var to hold the unique number
//              assign the first index of the array to the common number
//              check if the 2nd index of the array is === to the common number
//              if not, then check if the common number is equal to the 3rd index
//              if not, then return the unique number.
//              if yes, then we have the common number
//              now that we have the common number, loop through the array and check if each element is === to the common number
//              if not, then assign that value to the unique variable

function findUniq(numbers) {
    let common
    let unique
    common = numbers[0]
    if(common !== numbers[1]) {
        if(common !== numbers[2]) {
            unique = common
            return unique
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] !== common) {
            unique = numbers[i]
            return unique
        }
    }
}


console.log(findUniq([1,1,1,1,1,3,1,1,1,])) // 3