// reverse the order of the array
// P: array
// R: array

function reverseList(array) {
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray[array.length - 1 - i] = array[i]
    }
    return newArray
}


console.log(reverseList([2,3,4,5])) // [5,4,3,2]

//Another Solution:
const reverseArray = (array) => array.reverse()