// take in the distance in miles, miles per gallon of the car, and gallons remaining
// calculate if will reach the destination or not
// P: number, number, number
// R: true or false

const zeroFuel = (distance, mpg, gallons) => mpg * gallons >= distance ? true : false


console.log(zeroFuel(50,25,2)) // true
console.log(zeroFuel(60,25,2)) // false