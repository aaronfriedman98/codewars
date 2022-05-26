// accept an array of strings and prepend a number corresponding to its line
// P: array of strings
// R: same array of strings but with numbers listed in front of it

// function number(arr){
//     let newArray = []
//     for(let i = 0; i < arr.length; i++){
//         newArray.push(i+1 + ": " + arr[i])
//     }
//     return newArray
// }

const number = (arr) => arr.map((line, index) => `${index+1}: ${line}`)



console.log(number(['a','b','c','d'])) // ['1: a','2: b','3: c','4: d']