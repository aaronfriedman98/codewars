// accept an int, if the int is between 0 and 12 then return the factorial, if 0 then return 1, if outside of range then return a RangeError
// P: int, negative or positive
// R: positive int, or RangeError

function factorial(n){
    let factorial = 1
    if(n===0){
        return 1
    }
    else if(n > 0 && n <= 12){
        for(let i = 1; i <= n; i++){
            factorial *= i
        }
        return factorial
    }
    else{
        throw new RangeError()
    }
}

console.log(factorial(0)) // 1
console.log(factorial(5)) // 120
console.log(factorial(-1)) // RangeError
console.log(factorial(13)) // RangeError