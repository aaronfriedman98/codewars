// TASK: given an array of directions of NORTH EAST SOUTH WEST, remove the pointless directions such as a EAST and a WEST for example.
// SOLUTION:    any time there is a east and west, delete both from the array. Same for north and south
//              to check for this, create a count variable for each direction
//              loop through the array and count how many of each direction
//              if the count of east and west or north and south are equal, then completely remove the pair
//              otherwise, find the difference between the 2 and delete all instances of the lower one
//              To delete the necessary directions for equal directions: loop through the array searching for any of those directions and delete
//              To delete the necessary directions for non-equal directions: whichever direction was less, loop through and delete all
//              whichever one was more, we need to leave the difference of the amounts in the array. create a count that is equal to the amount that needs to 
//              be deleted, and again loop through the array deleting any of that direction as long as the count does not exceed the the difference.

function dirReduc(directions) {

    let northCount = 0
    let southCount = 0
    let eastCount = 0
    let westCount = 0

    let northSouth = false
    let eastWest = false

    for(let i = 0; i < directions.length; i++) {
        if (directions[i] === 'NORTH') {
            northCount++
        }
        else if (directions[i] === 'SOUTH') {
            southCount++
        }
        else if (directions[i] === 'EAST') {
            eastCount++
        }
        else {
            westCount++
        }
    }
    if (northCount === southCount) {
        northSouth = true
    }
    if (eastCount === westCount) {
        eastWest = true
    }

    if(northSouth === true) {
        for (let j = 0; j < directions.length; j++) {
            if (directions[j] === 'NORTH' || directions[j] === 'SOUTH') {
                directions.splice(j, 1)
            }
        }
    }

    if(eastWest === true) {
        for (let j = 0; j < directions.length; j++) {
            if (directions[j] === 'EAST' || directions[j] === 'WEST') {
                directions.splice(j, 1)
            }
        }
    }
    return directions
}


console.log(dirReduc(['NORTH', 'EAST', 'SOUTH', 'WEST', 'SOUTH'])) // ['SOUTH']

