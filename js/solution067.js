//TASK: count and return the number of divisers of a positive integer that was passed in
// SOLUTION:    create a count variable
//              create a loop that iterates the amount of times as the integer passed in
//              within each iteration, test if the integer % i === 0
//              if yes, then add that to the count variable
//              return the total


function getDivisorsCnt(num) {
    let count = 0
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++
        }
    }
    return count
}

console.log(getDivisersCnt(4)) // 3
console.log(getDivisersCnt(8)) // 4
console.log(getDivisersCnt(5)) // 2

console.log(getDivisersCnt(1)) // 1
console.log(getDivisersCnt(10)) // 4
console.log(getDivisersCnt(11)) // 2
console.log(getDivisersCnt(54)) // 8