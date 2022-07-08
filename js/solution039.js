// GOAL: take in a string and if the string has an odd amount of letters then return the middle letter, otherwise return the middle 2 letters
// P: string
// R: char
// SOLUTION: first check if the string has even amount of letters or odd.
//           if odd then target the middle letter with the index of half of the length of the string -0.5 and then return that letter
//           if even, then then target the 2 middle letters with the index of half of the length of the string, and also -1 from that and return those letters

function getMiddle(string) {
    if(string.lenght % 2 === 1){
        return string[string.length - ((string.length + 1)/2)]
    }
    else{
        return string[string.length - string.length/2 -1] + string[string.length - string.length/2]
    }
}

console.log(getMiddle('hey')) // 'e'
console.log(getMiddle('your')) // 'ou'