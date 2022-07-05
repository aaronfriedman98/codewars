// GOAL: take in 2 strings and return a combination of the letters all sorted and listed only once
// P: 2 strings
// R: 1 string
// SOLUTION: combine both strings. 
//           split each char of the string into elements of an array.
//           sort it.
//           remove double letters
//           convert back into a string


function longest(string1, string2){
    let tempArray = (string1 + string2).split('').sort()
    let newArray = []
    let temp
    for(let i = 0; i < tempArray.length; i++){
        if(tempArray[i] !== temp){
            newArray.push(tempArray[i])
        }
        temp = tempArray[i]
    }
    return newArray.join("")
}

console.log(longest('adfeeefsaf', 'bbbzi')) // 'abdefisz'