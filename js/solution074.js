// TASK: pass in a principle, interest, tax, and desired sum, and return how many years it will take to reach the desired amount
// SOLUTION:    calculate the interest and tax rate
//              create a while loop that runs as long as the principle is less than the desired sum
//              within each iteration, add the interest to the principle and subtract the tax from the principle

function calculateYears(principle, interestRate, taxRate, desired) {
    let years = 0
    let interestEarned=0
    let taxes=0
    while (principle < desired) {
        interestEarned = principle * interestRate
        taxes = interestEarned * taxRate
        principle = principle + interestEarned - taxes
        years++
    }
    return years
}

console.log(calculateYears(1000, .05, .18, 1100)) // 3
console.log(calculateYears(1000, .01625, .18, 1200)) // 14