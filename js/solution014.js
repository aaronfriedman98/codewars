// accept a string and return a string with each char doubled
// P: string
// R: string


function doubleChar(string){
    let doubleString = ""
    for(let i = 0; i < string.length; i++){
        doubleString += string[i] + string[i]
    }
    return doubleString
}


console.log(doubleChar("hello")) // hheelllloo