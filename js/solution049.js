// GOAL: take in an array, and return it minus the elements in the given array
// P: array
// R: array
// SOLUTION:    loop through the array and check if each value matches the given arrays element and if not then delete the element with the indexOf method

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    for(let i = 0; i < birds.length; i++) {
        for(let j = 0; j < geese.length; j++) {
            if(birds[i] == geese[j]){
                birds.splice(i,1)
            }
        }
    }
    return birds
    }

  console.log(gooseFilter(["jack", "African", "Toulouse", "there", "Roman Tufted", "Steinbacher", "hi"])) // ["hi"]