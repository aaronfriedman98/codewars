// average the scores of 3 grades and return the associated letter grade
// P: 3 ints, all between 0 and 100
// R: char - A, B, C, D, F


function getGrade(grd1,grd2,grd3){
    let sum = 0
    let average = 0
    sum = grd1 + grd2 + grd3
    average = sum / 3
    if(average >= 90){
        return console.log('A')
    }
    else if(average >= 80){
        return console.log('B')
    }
    else if(average >= 70){
        return console.log('C')
    }
    else if(average >= 60){
        return console.log('D')
    }
    else{
        return console.log('F')
    }
}

getGrade(80,90,100) // A
getGrade(70,80,90) // B
getGrade(60,70,80) // C
getGrade(50,60,70) // D
getGrade(59,59,59) // F