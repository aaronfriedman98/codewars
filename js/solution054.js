// TASK: take in a number that represents the floor of an american hotel, and return the corresponding floor of a non-american hotel. (american hotels count the ground floor as the first floor and some skip the 13th floor)
// P: int 
// R: int

function getRealFloor(floor) {
    if(floor > 12) {
        return floor - 2
    }
    else if(floor < 13 && floor > 0) {
        return floor -1
    }
    else {
        return floor
    }
}

console.log(getRealFloor(3)) // 2
console.log(getRealFloor(15)) // 13