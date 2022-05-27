//accepts an array of strings and return the array elements sorted from shortest to longest strings in an array
// P: array of strings
// R: array of strings

function sortByLength(array){
    array.sort((a,b) => a.length - b.length)
    return array
}

console.log(sortByLength(['hello', 'hi', 'hey']))