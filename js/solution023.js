// find the sum of all the numbers up to n that are divisible by 3 or 5
// P: int, positive
// R: int, positive

function findSum(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i
        }
    }
    return sum
}

console.log(findSum(5)) // 8
console.log(findSum(10)) // 33