// TASK: take in the weight and height and find the body mass index. if <= 18.5 --> "underweight" if 25 --> "Normal" if 30 --> "Overweight" if > 30 --> "Obese"
// P: int, int (weight, height)
// R: string
// SOLTUTION:   create var = weight/height**2
//              check if bmi is less or equal to amounts


function bmi(weight, height) {
    const bmi = weight/height**2
    if(bmi <= 18.5) return "Underweight"
    else if(bmi <= 25) return "Normal"
    else if(bmi <= 30) return "Overweight"
    else return "Obese"
}

