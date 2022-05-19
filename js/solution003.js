// find the sum of all the numbers between the 2 given numbers
// P: 2 ints, negative or positive
// R: int

function getSum(num1, num2){
    let sum = 0
    if(num1 === num2){
        console.log(num1)
    }
    else if(num1 < num2){
        for(let i = num1; i <= num2; i++){
            sum += i
        }
        console.log(sum)
    }
    else{
        for(let i = num1; i >= num2; i--){
            sum += i
        }
        console.log(sum)
    }
}

getSum(3,6) // 18
getSum(5,7) // 18
getSum(-4,1) // -9
getSum(1,-2) // -2
getSum(4,4)// 4