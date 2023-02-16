// TASK:        pass in a test score and an array that contains test scores. find the average in the array and if the test score is above average return true, else return false
// SOLUTION:    create a variable to hold the average
//              loop through the array and add all the scores, and then find the average
//              test whether the passed in score is above or below the average score

function betterThanAverage(classPoints, yourScore) {
    let classAverage = 0
    classPoints.forEach(element => {
        classAverage += element
    });
    classAverage = classAverage/classPoints.length
    if (yourScore > classAverage) {
        return true
    }
    else {
        return false
    }
    
}


console.log(betterThanAverage([87,43,99,101], 90))

