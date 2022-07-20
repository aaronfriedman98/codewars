// GOAL:    take in a string of words with spaces in between and take in another string of words with spaces in between
//          return the first string in title case (the first letter capitalized and the rest lower) except for the words
//          in the second parameter, which should be completely lowercase. (if the 2nd parameter is empty then it should return undefined)
// P: string, string (the return string and the exceptions)
// R: string
// SOLUTION:    create an array variable to hold the title case string
//              create an array variable to hold an array of the first parameter string
//              create an array variable to hold the exceptions
//              split the 1st parameter into an array of each word separated by the space
//              loop through the array and with each element, copy the lowercase value of it to the title case array 
//              split the exceptions string into the exception array variable
//              loop through the title case array, and check if each element is equal to any of the exception words
//              if it does not match any word, then capitalize the first letter, if it does then push it as is
//              convert the final array into the title case string variable

function titleCase(title, exceptions) {
    let solutionArray = []
    let titleArray = []
    let exceptionsArray = []
    let equal = false
    titleArray = title.split(' ')
    if (typeof(exceptions) != "undefined") {
        exceptionsArray = exceptions.split(' ')
        for(let i = 0; i < titleArray.length; i++) {
            for(let j = 0; j < exceptionsArray.length; j++) {
                if(titleArray[i].toLowerCase() === exceptionsArray[j].toLowerCase()){
                    equal = true
                }
            }
            if(i === 0) {
                solutionArray.push(titleArray[i].slice(0,1).toUpperCase() + titleArray[i].slice(1,titleArray[i].length).toLowerCase())
                equal = false
            }
            else if(equal) {
                solutionArray.push(titleArray[i].toLowerCase())
                equal = false
            }
            else {
                solutionArray.push(titleArray[i].slice(0,1).toUpperCase() + titleArray[i].slice(1,titleArray[i].length).toLowerCase())
            }
        }
        return solutionArray.join(' ')
    }
    else {
        for(let i = 0; i < titleArray.length; i++) {
            solutionArray.push(titleArray[i].slice(0,1).toUpperCase() + titleArray[i].slice(1,titleArray[i].length).toLowerCase())
        }
        return solutionArray.join(' ')
    }
}

console.log(titleCase('a clash of KINGS', 'a an the of')) // 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // 'The Wind in the Willows'