// in order for a member to be included in the senior membership, they must be at least 55 yrs old and handicap level of above 7
// the handicap numbers range from -2 and 26
// accepts an array of value pairs that contains information about each member
// the first value of each pair determines the age of the member, the second value of each pair determines the handicap level
// Goal: determine which members are placed in the open category or the senior category
// P: array of value pairs
// R: array

function openOrSenior(data){
    let members = []
    for(let i = 0; i < data.length; i++){
        if(data[i][0] >= 55 && data[i][1] > 7){
            members[i] = ("Senior")
        }
        else{
            members[i] = ("Open")
        }
    }
    return members
}

//Alternative:
//const openOrSenior = data => data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? "Senior" : "Open")) 

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])) 
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
// ['Open', 'Senior', 'Open', 'Senior']