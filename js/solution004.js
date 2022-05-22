// return an array containing all of the numbers between a and b where a is < than be
// P: 2 ints, a and b, a is less than be
// R: array

function between(a,b){
    let arr = []
    if(a < b){
        for(let i = a; i <= b; i++){
            arr.push(i)
        }
    }
    console.log(arr)
}


between(3,4) // [3, 4]
between(0,4) // [0,1,2,3,4]
between(7,10) // [7,8,9,10]