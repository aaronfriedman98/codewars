// If parameter is true return "yes", if false return "no"
// P: true or false
// R: "yes" or "no"

const boolToWord = (bool) => bool===true ? "Yes" : "No"

console.log(boolToWord(true)) // "yes"
console.log(boolToWord(false)) // "no"