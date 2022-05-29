// if parameter is a string then return "error", if number then multiply by 50 and add 6
// P: number or string
// R: "error" or number

const problem = (x) => typeof x === 'string' ? "Error" : x*50+6

console.log(problem("hello")) // "error"
console.log(problem(10)) // 506