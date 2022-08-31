// TASK: pass in a string and return an array with each char, removing any doubles that are in a row
// SOLUTION:    push the first index of the string to an array variable
//              loop through each char of the string starting from index 1
//              with each iteration, check if that char is equal to the char before, if not then push it to the array, if yes then dont push
//              return the array


function uniqueInOrder(string) {
    let array = []
    if (string === '') return array
    else {
        array.push(string[0])
    for (let i = 1; i < string.length; i++) {
        if (string[i] !== string[i-1]) {
            array.push(string[i])
        }
    }
    return array
    }
}


console.log(uniqueInOrder('AddddkiiAA')) // ['A','d','k','i','A']