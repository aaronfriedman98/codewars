// TASK: pass in an array of numbers and return the sum
// P: array of numbers
// R: number
// SOLUTION:    use the reduce function

const sum = (array) => array.length > 0 ? array.reduce((num, acc) => num + acc) : 0

console.log(sum([1,2,3,4])) // 10
console.log(sum([])) // 0