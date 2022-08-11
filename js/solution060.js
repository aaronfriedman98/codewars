// TASK: pass in an array of strings made up of "sheep" and 1 "wolf". The array represents a line of sheep and one wolf, and the farmer is standing at the end of the array. 
//       if the closest string to the farmer (end of the array) is a wolf, then return "Pls go away and stop eating my sheep"
//       else, return "Oi! Sheep number N! You are about to be eaten by a wolf!", N being the location of the first sheep after the "wolf" from the farmers view
// P: array of strings (multiple "sheep" and 1 "wolf")
// R: string ( "Pls go away and stop eating my sheep" or "Oi! Sheep number N! You are about to be eaten by a wolf!" )
// SOLUTION:    check if the last element of the array is === to "wolf", then return "Pls go away and stop eating my sheep"
//              else, loop through the array, searching for the "wolf" and return "Oi! Sheep number N! You are about to be eaten by a wolf!" with N being the array.length - "wolf" index + 1

function warnTheSheep(sheep) {
    if (sheep[sheep.length-1] === "wolf") {
        return "Pls go away and stop eating my sheep"
    }
    else {
        return `Oi! Sheep number ${sheep.length-sheep.indexOf("wolf")-1}! You are about to be eaten by a wolf!`
    }
}

console.log(warnTheSheep(["sheep","sheep", "sheep", "wolf"])) // "Pls go away and stop eating my sheep"
console.log(warnTheSheep(["sheep","sheep", "wolf", "sheep"])) // "Oi! Sheep number 1! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["sheep","sheep", "wolf", "sheep","sheep"])) // "Oi! Sheep number 2! You are about to be eaten by a wolf!"