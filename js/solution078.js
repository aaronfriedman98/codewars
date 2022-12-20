// TASK: pass in an array of ints and sort them from least to most
// SOLUTION:    create a variable called lowest and assign the first int of the array to it
//              loop through the array and check if each int is lower than it
//              after the loop, push that number to a new array
//              repeat this the same amount of times as the length of the array
//              nest the original loop in order to do this

function solution(nums){
    return nums ? nums.sort(function(a, b) { return a - b;}) : [];
  }


console.log(solution([5,2,6,4,1])) // [1,2,4,5,6]
console.log(solution([])) // []