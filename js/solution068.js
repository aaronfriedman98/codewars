// TASK: pass in 3 integers, and return true if a triangle can be built with the 3 integer lengths (all must be greater than 0)
// SOLUTION:    in order to be a triangle, each variation of 2 sides must be greater than the 3rd side

const isTriangle = (a,b,c) => (a + b > c) && (a + c > b) && (b + c > a)


console.log(isTriangle(1,2,2)) // true
console.log(isTriangle(7,2,2)) // false