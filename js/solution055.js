// TASK: take in a string and remove all of the characters after the #
// P: string
// R: string
// SOLUTION:    convert string into an array
//              loop through each element to check for "#"
//              once found, slice the array up until that index
//              join the array back into a string and return result


function removeUrlAnchor(url) {
    let array = url.split("")
    for(let i = 0; i < array.length; i++) {
        if (array[i] === "#") {
            array = array.slice(0,i)
        }
    }
    return array.join("")
}


console.log(removeUrlAnchor("www.codewars.com#about")) // "www.codewars.com"