// pass in an array with integer pairs, the first int determines how many ppl get on the bus, the 2nd int determines how many people get off
// display the total number of ppl remaining after the array
// P: array
// R: int, not negative

function number(array){
    let passengerTotal = 0
    for(let i = 0; i < array.length; i++){
        passengerTotal += array[i][0]
        passengerTotal -= array[i][1]
    }
    return passengerTotal
}

console.log(number([[5,0],[5,0],[0,5],[0,4]])) // 1
console.log(number([[5,0],[5,0],[0,5],[0,5]])) // 0