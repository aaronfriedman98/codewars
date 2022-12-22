// TASK:
// SOLUTION:    

function countSheep(num) {
    let solution = ""
    for(let i = 1; i <= num; i++) {
        solution += `${i} sheep...`
    }
    return solution
}


console.log(countSheep(3)) // "1 sheep...2 sheep...3 sheep..."