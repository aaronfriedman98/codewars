// Test if a number is even and if yes return true, if it is odd or a float then return false
// P: number, positive negative int or float
// R: true or false


const testEven = num => num % 2 === 0 ? true : false



console.log(testEven(2)) // true
console.log(testEven(-8)) // true
console.log(testEven(7)) // false
console.log(testEven(5.4)) // false