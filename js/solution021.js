// accepts an array of 3 values and returns the index of the middle digit
// P: array of 3 ints
// R: int (positive) (the index)


function gimme(triplet){
    if(triplet[0] > triplet[1] && triplet[0] < triplet[2] 
    || triplet[0] < triplet[1] && triplet[0] > triplet[2]) {
        return 0
    }
    else if(triplet[1] > triplet[0] && triplet[1] < triplet[2] 
    || triplet[1] < triplet[0] && triplet[1] > triplet[2]) {
        return 1
    }
    else {
        return 2
    }
}

console.log(gimme([3,6,8])) // 1
console.log(gimme([55,2,100])) // 0
console.log(gimme([11,200,59])) // 2