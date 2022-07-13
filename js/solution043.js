// GOAL: take in a string and return a string with each char accumulating in amount and separated by - (dashes) and the first of each set capitalized
// P: string
// R: string
// SOLUTION:    create a string variable to hold the final string
//              loop through each char of the array
//              add the strings uppercase char to the answer with the index
//              then add lowercase chars to the array the amount of times as the index
//              if the index has not yet reached the end of the string length-1 then add a dash         

function accum(string) {
    let answer = ''
    for(let i = 0; i < string.length; i++){
        answer += string[i].toUpperCase()
        answer += string[i].repeat(i).toLowerCase()
        if(i != string.length - 1) {
            answer += '-'
        }
    }
    return answer
}

console.log(accum('aBcd')) // 'A-Bb-Ccc-Dddd'