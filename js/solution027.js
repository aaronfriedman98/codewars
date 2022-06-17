// Build a pyramid with "*" with an n amount of floors
// P: int, positive
// R: array

function towerBuilder(floors){
    let star = '*'
    let spaceBefore = []
    let spaceBeforeStr = ''
    let spaceAfter = []
    let spaceAfterStr = ''
    let pyramid = []
    for(let i = 0; i < floors; i++){
        spaceBefore[i] = " "
        spaceAfter[i] = " "
    }
    for(let i = 0; i < floors; i++){
            if(spaceBefore != ''){
                spaceBefore.pop()
                spaceAfter.pop()
                spaceBeforeStr = spaceBefore.join("")
                spaceAfterStr = spaceAfter.join("")
            }
        pyramid.push(spaceBeforeStr + star + spaceAfterStr)
        star += '**'
    }
    return pyramid
}

console.log(towerBuilder(3)) // [
                             //  "  *  " ,
                             //  " *** " ,
                             //  "*****" 
                             //  ]