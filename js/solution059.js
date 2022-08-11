// TASK: pass in 2 lists of 3 integers each representing 2 cuboids, and return the difference in volumen between the cuboids
// P: 2 arrays of ints
// R: int
// SOLUTION:    loop through the lenght of the cuboids and find the volume of each cubiod
//              find the larger cuboid and subtract the smaller cuboid and return the solution

function findDifference(a, b) {
    let totalA = 1
    let totalB = 1
    for (let i = 0; i < a.length; i++) {
        totalA *= a[i]
        totalB *= b[i]
    }
    if (totalA > totalB) {
        return totalA - totalB
    }
    else {
        return totalB - totalA
    }
}

console.log(findDifference([2,4,5], [7,4,5])) // 100