// find the Nth power of the int which is in the index of N in the array
// P: array with positive numbers, positive int
// R: positive int or -1

const index = (array, n) => array.length > n ? array[n]*array[n] : -1

console.log(index([3,2,4], 2)) // 16
console.log(index([2,4,2], 3)) // -1