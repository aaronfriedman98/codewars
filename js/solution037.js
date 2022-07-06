// GOAL: take in an int and determine if it is "Even" or "Odd"
// P: int
// R: "Even" or "Odd"
// SOLUTION: test the parameter modulus 2, if it returns 0 then it is even, if it returns 1 it is false

const even_or_odd = num => num % 2 === 0 ? "Even" : "Odd"



console.log(even_or_odd(8)) // "Even"
console.log(even_or_odd(9)) // "Odd"