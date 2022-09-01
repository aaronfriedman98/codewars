// TASK: pass in a string containing words where each word contains a number within it. sort the words based off of their number. There can be 1-9 words in the string
// SOLUTION:    create an array variable
//              split the string into an array of words
//              loop through each word of the array
//              within that loop, loop through each char of every word, searching for any word that is === to i of the outer loop
//              once found, push that word to the array variable
//              join the array variable for the solution

function order(string) {
    let solutionArray = []
    let tempArray = string.split(" ")
    for (let j = 1; j < tempArray.length+1; j++) {
        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i].includes(j)) {
                solutionArray.push(tempArray[i])
            }
        }
    }
    return solutionArray.join(" ")

}

console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"