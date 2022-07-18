// GOAL: take in a parameter N and an array of numbers, copy all of the elements of the array into a new array allowing only numbers repeated N times and not more
// P: int, array
// R: array
// SOLUTION:    create a variable to store the array solution
//              loop through the contents of the given array and push each element to the new array, assuming it passes the test
//              check the new array for instances of each value, and if the instances are less than N then push it on to the array
//              return the solution

function deleteNth(array,n) {
    let answer = []
    let count = 1
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < answer.length; j++) {
            if(answer[j] === array[i]){
                count += 1
            }
        }
        if(count <= n) {
            answer.push(array[i])
        }
        else{
            count = 0
        }
    }
    return answer
}

console.log(deleteNth([20,30,20,90],1)) // [20,30,90]
console.log(deleteNth([20,30,20,90],2)) // [20,30 20,90]
console.log(deleteNth([20,30,20,90,20,20],3)) // [20,30,20,90,20]
console.log(deleteNth([20,37,20,21],1)) // [20,37,21]
console.log(deleteNth([1,1,3,3,7,2,2,2,2],3)) // [1, 1, 3, 3, 7, 2, 2, 2]
