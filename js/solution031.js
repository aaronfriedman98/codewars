// take in a string of words and capitalize the first letter of each word
// P: string
// R: string

function capitalize(string) {
    let array = string.split(" ")
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
    }
    return newArray.join(" ")
}

console.log(capitalize("hi how are you today?")) // "Hi How Are You Today?"