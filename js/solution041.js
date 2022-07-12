// GOAL: take in a base number and a factor parameter and return true if the number is a factor of the base number and false if not
// P: int, int
// R: true or false
// SOLUTION: check if the base % number is equal to 0 and then return true or false

const checkForFactor = (base, factor) => base % factor === 0 ? true : false

console.log(checkForFactor(8,2)) // true
console.log(checkForFactor(9,2)) // false