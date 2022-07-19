// GOAL: a city has a population of 1000, and it grows 2 percent per year, and gets an additional 50 inhabitants per year. find out how many years it will take for the population to reach 1200 or greater
// P: 4 ints (population, percentGrowth, additional, final)
// R: int (number of years)
// SOLUTION:    create a variable to hold the years
//              while loop - as long as the population is less than "final", add the percent of population to yearly population
//              and add the additional inhabitants, and at the end, add 1 to years
//              return once the while loop ends

function nbYear(population, percentGrowth, additional, final) {
    let years = 0
    while (population < final) {
        population += (population/100) * percentGrowth
        population += additional
        years++
    }
    return years
}

console.log(nbYear(1000,2,50,1200)) // 3
console.log(nbYear(1500, 5, 100, 5000)) // 15