// TASK: return a table multiplying the passed in variable by 1 through 10. use /n to skip a line in between each multiplication problem
// SOLUTION:    run a loop with 10 iterations
//              create a string variable to hold the entire table
//              within each iteration, add 'i * number = solution" /n
//              return the string

function multiTable(number) {
    let solution = `1 * ${number} = ${number}\n`
    for(let i = 2; i < 10; i++) {
        solution += `${i} * ${number} = ${number * i}\n` 
    }
    solution += `10 * ${number} = ${number * 10}`

    return solution
}




console.log(multiTable(5))

