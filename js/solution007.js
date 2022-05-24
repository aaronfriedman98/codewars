// return the smallest and largest number within the array
// P: array of numbers
// R: an array containing the smallest number and largest number



function minMax(arr){
    let smallest = arr[0]
    let largest = arr[0]
    let newArray = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
        }
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    newArray.push(smallest)
    newArray.push(largest)
    return newArray
}

console.log(minMax([2,3,2,4,6,3,10])) // [2,10]
console.log(minMax([34,2,4,5])) // [2,34]
console.log(minMax([3,4,-2,5])) // [-2,5]