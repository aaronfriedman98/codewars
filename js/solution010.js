//determine whether a string is exactly 4 digits or exactly 6 digits (numbers can be negative)
// P: string
// R: true or false



function validatePIN(pin){
    let total = 0
    for(let i = 0; i < pin.length; i++){
        if(pin[i] === '1' || pin[i] === '2' ||
           pin[i] === '3' || pin[i] === '4' || 
           pin[i] === '5' || pin[i] === '6' || 
           pin[i] === '7' || pin[i] === '8' || 
           pin[i] === '9' || pin[i] === '0'){
            total+=1
        }
        else{
          return false
        }
    }
    if(total === 4 || total === 6){
      if(pin.length === 4 || pin.length === 6){
          return true 
      }
      else{
        return false
      }
    }
    else{
        return false
    }
}

console.log(validatePIN('1234')) // true
console.log(validatePIN('12345')) // false
console.log(validatePIN('182749'))// true
console.log(validatePIN('234d')) // false
console.log(validatePIN('-2343')) // true
