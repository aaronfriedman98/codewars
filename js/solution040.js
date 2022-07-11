// GOAL: take in an integer and rearrange all of its digits to descending order
// P: int
// R: int
// SOLUTION: 
//          convert the int to a string, and then convert it to an array
//          set a variable to temporarily hold the higher value
//          create a variable to hold the length of the array
//          create an index variable to hold an index of the array in order to eventually delete part of the array
//          create an array that will hold the solution
//          assign the first digit of the int to the variable
//          loop through the variable that holds the length of the array of digits
//          loop again through the the actual size of the array of digits
//          check if each digit is larger than the hightest
//          if a digit is higher, then assign that digit to the highest variable
//          assign the index of that digit to the index variable
//          now, once you found the highest digit in the array, in the outer loop, splice the current index variable in order to delete the highest digit from the array
//          push the highest variable to the solution array
//          reset the highest variable to 0
//          repeat until there is no more array, and return the new array converted back into an int

function descendingOrder(int) {
    int += ''
    intArray = int.split('')
    let highest = int[0]
    let len = intArray.length
    let index = 0
    let solution = []
    for(let i = 0; i < len; i++){
        for(let j = 0; j < intArray.length; j++){
            if(intArray[j] > highest){
                highest = intArray[j]
                index = j
            }
        }
        intArray.splice(index,1)
        solution.push(highest)
        highest = 0
    }
    return Number(solution.join(""))
}

console.log(descendingOrder(123)) // 321
console.log(descendingOrder(49349)) // 99443