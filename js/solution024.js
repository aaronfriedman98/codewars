// accept an array of directions made up of N,E,S,W. 
// Each letter/direction takes a minute to walk.
// return true if the letters/directions take you to the original location, and if it took exactly 10 mins
// P: array of n, e, s, w
// true or false



function isValidWalk(directions){
    let n = 0
    let e = 0
    let s = 0
    let w = 0
    if(directions.length === 10){
        for(let i = 0; i < 10; i++){
            if(directions[i] === 'n'){
                n += 1
            }
            else if(directions[i] === 'e'){
                e += 1
            }
            else if(directions[i] === 's'){
                s += 1
            }
            else if(directions[i] === 'w'){
                w += 1
            }
        }
        if(n === s && e === w){
            return true
        }
        else{
            return false
        }
    }
    else {
        return false
    }
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // true
console.log(isValidWalk(['n','s','n','s','n','s','n','s','e','s'])) // false
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n'])) // false
