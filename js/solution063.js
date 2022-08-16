// TASK: pass in a list of ints and in one function return the max and in another return the min
// P: array of ints
// R: int
// SOLUTION:    assign the first int to smallest or largest variable
//              loop through the array checking if any elements are smaller or larger

function min(list) {
    let mmin = list[0]
    for (let i = 1; i < list.length; i++) {
        if (min > list[i]) {
            min = list[i]
        }
    }
    return min
}

function max(list) {
    let max = list[0]
    for (let i = 1; i < list.length; i++) {
        if (max < list[i]) {
            max = list[i]
        }
    }
    return max
}



console.log(min([3,5,35,56,1])) // 1
console.log(max([3,5,35,56,1])) // 56