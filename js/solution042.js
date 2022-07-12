// GOAL: take in an int and return it rounded to the nearest 5
// P: int 
// R: int
// SOLUTION: % the int with 5 and if it returns 0 then leave as is,
//              if it returns 1 then add 4, if it returns 2 then add 3, if it returns 3 then add 2, and if it returns 4 then add 1
//              if int is a negative number then conver it to positive, do the same solution reversed and revert it back to negative

function roundToNext5(int) {
    if(int > 0){
        if(int % 5 === 0){
            return int
        }
        else if(int % 5 === 1){
            return int + 4
        }
        else if(int % 5 === 2){
            return int + 3
        }
        else if(int % 5 === 3){
            return int + 2
        }
        else if(int % 5 === 4){
            return int + 1
        }
    }
    else if(int === 0){
        return 0
    }
    else {
        int = int * -1
        if(int % 5 === 0){
            return -int
        }
        else if(int % 5 === 1){
            return (int - 1) * -1
        }
        else if(int % 5 === 2){
            return (int - 2) * -1
        }
        else if(int % 5 === 3){
            return (int - 3) * -1
        }
        else if(int % 5 === 4){
            return (int - 4) * -1
        }
    }

    
}

console.log(roundToNext5((1))) // 5
console.log(roundToNext5((7))) // 10
console.log(roundToNext5((13))) // 15
console.log(roundToNext5((19))) // 20
console.log(roundToNext5((0))) // 5
console.log(roundToNext5((-19))) // -15
console.log(roundToNext5((-6))) // 0
