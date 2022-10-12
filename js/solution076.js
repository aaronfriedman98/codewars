// TASK: pass in a number and return the sum of all the numbers between 0 and the given number
// SOLUTION:    make a loop that runs n amount of times and each time add i to the sum

function summation(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}

console.log(summation(5)) // 15