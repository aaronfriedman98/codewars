// test if 2 strings are anagrams, ignore capitals
// P: 2 strings
// R: true or false

function isAnagram(string1, string2){
    let array1 = string1.toLowerCase().split('')
    let array2 = string2.toLowerCase().split('')
    array1.sort()
    array2.sort()
    let newString1 = array1.join('')
    let newString2 = array2.join('')
    if(newString1 === newString2){
        return true
    }
    else{
        return false
    }
}

console.log(isAnagram("coffee", "feefoc")) // true
console.log(isAnagram("coffee", "fofee")) // false