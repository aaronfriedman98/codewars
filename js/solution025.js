// Accept a string and return an array.
// Each element of the array is a copy of the string but each element having the next letter of of the string capatilized.
// Like a wave.
// White spaces should be skipped over
// P: lowercase string, with or without white spaces
// R: array with elements creating a wave

function wave(str){
    let result = []
    for(let i = 0; i < str.length; i++){
        let tempArray = str.split("")
        if(tempArray[i] !== ' '){
            tempArray[i] = tempArray[i].toUpperCase()
            result.push(tempArray.join(''))
        }
    }
    return result
}


console.log(wave("hello")) // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
console.log(wave("hi man")) // ['Hi man', 'hI man', 'hi Man', 'hi mAn', 'hi maN']

