// accept a string and divide up any camelcased words
// P: string
// R: string

function solution(strings) {
    let count = 0
    let string = strings.split("")
    // console.log(string)
    for(let i = 0; i < string.length-1; i++){
        if(string[i] === 'a'.toLowerCase() || string[i] === 'b'.toLowerCase() || 
           string[i] === 'c'.toLowerCase() || string[i] === 'd'.toLowerCase() || 
           string[i] === 'e'.toLowerCase() || string[i] === 'f'.toLowerCase() || 
           string[i] === 'g'.toLowerCase() || string[i] === 'h'.toLowerCase() || 
           string[i] === 'i'.toLowerCase() || string[i] === 'j'.toLowerCase() || 
           string[i] === 'k'.toLowerCase() || string[i] === 'l'.toLowerCase() ||
           string[i] === 'm'.toLowerCase() || string[i] === 'n'.toLowerCase() || 
           string[i] === 'o'.toLowerCase() || string[i] === 'p'.toLowerCase() || 
           string[i] === 'q'.toLowerCase() || string[i] === 'r'.toLowerCase() || 
           string[i] === 's'.toLowerCase() || string[i] === 't'.toLowerCase() || 
           string[i] === 'u'.toLowerCase() || string[i] === 'v'.toLowerCase() || 
           string[i] === 'w'.toLowerCase() || string[i] === 'x'.toLowerCase() || 
           string[i] === 'y'.toLowerCase() || string[i] === 'z'.toLowerCase() 
           &&
           string[i+1] === 'a'.toUpperCase() || string[i+1] === 'b'.toUpperCase() || 
           string[i+1] === 'c'.toUpperCase() || string[i+1] === 'd'.toUpperCase() || 
           string[i+1] === 'e'.toUpperCase() || string[i+1] === 'f'.toUpperCase() || 
           string[i+1] === 'g'.toUpperCase() || string[i+1] === 'h'.toUpperCase() || 
           string[i+1] === 'i'.toUpperCase() || string[i+1] === 'j'.toUpperCase() || 
           string[i+1] === 'k'.toUpperCase() || string[i+1] === 'l'.toUpperCase() ||
           string[i+1] === 'm'.toUpperCase() || string[i+1] === 'n'.toUpperCase() || 
           string[i+1] === 'o'.toUpperCase() || string[i+1] === 'p'.toUpperCase() || 
           string[i+1] === 'q'.toUpperCase() || string[i+1] === 'r'.toUpperCase() || 
           string[i+1] === 's'.toUpperCase() || string[i+1] === 't'.toUpperCase() || 
           string[i+1] === 'u'.toUpperCase() || string[i+1] === 'v'.toUpperCase() || 
           string[i+1] === 'w'.toUpperCase() || string[i+1] === 'x'.toUpperCase() || 
           string[i+1] === 'y'.toUpperCase() || string[i+1] === 'z'.toUpperCase() )
           {
            // string[i] += ' '
            console.log(string[i])
           }
    }
}

// function solution(string) {
//     let res = "";
//     let letters = string.split("");
//     letters.forEach(letter=>{
//       if(letter.toUpperCase() == letter)
//         res+=" "+letter
//       else
//         res+=letter
//     })
//     return res;
// }

console.log(solution("Hi, HowAre You")) // "Hi, How Are You"
console.log(solution("")) // ""
console.log(solution("Heythere")) // "Heythere"