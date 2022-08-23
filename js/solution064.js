// TASK: pass in a string and return an array containing all of the index's of capital letters within the string in order
// SOLUTION:    create a variable to hold the final array
//              loop through the string and check if each index is a capital letter, if yes then push to the final array

function capitals(string) {
    let solution = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            solution.push(i)
        }
    }
    return solution
}

console.log(capitals('HellO')) // [0, 4]