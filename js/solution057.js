// TASK: take in a list of strings and return a new list only containing the strings which have exactly 4 letters
// P: array of strings
// R: array of strings
// SOLUTION:    create a variable to hold the final array
//              loop through the parameter array and check the length of each element
//              if any have a length of 4 then push it to the final array

function friend(names) {
    let friends = []
    for(let i = 0; i < names.length; i++) {
        if (names[i].length === 4) {
            friends.push(names[i])
        }
    }
    return friends
}



console.log(friend(['aaron', 'jack', 'aron', 'nancy', 'mark'])) // ['jack','aron','mark']