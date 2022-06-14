// Each dragon is killed with 2 bullets.
// Take in the number of dragons and bullets, and determine whether there is enough bullets to kill the dragons
// P: 2 positive ints
// R: true or false

const hero = (bullets, dragons) => bullets/2 >= dragons ? true : false

console.log(hero(2,1)) // true
console.log(hero(2,2)) // false
console.log(hero(30, 50)) // false
console.log(hero(10, 5)) // true