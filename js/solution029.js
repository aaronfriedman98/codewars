// find the highest scoring word in a string
// P: string, with multiple words divided by spaces, all lowercase
// R: string, the highest scoring word

function high(string){
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let results = []
    let words = string.split(" ")
    let highestNum = 0
    let highestString = ''
    for(let i = 0; i < words.length; i++){
        let word = 0
        for(let j = 0; j < words[i].length; j++){
            for(let l = 0; l < letters.length; l++){
                if(words[i][j] === letters[l]){
                    word += l+1
                }
            }  
        }
        results.push(word)
    }
    highestNum = results[0]
    highestString = words[0]
    for(let i = 1; i < words.length; i++){
        if(results[i] > highestNum){
            highestNum = results[i]
            highestString = words[i]
        }
    }
    return highestString
}

console.log(high("hi how are you today")) // "today"
console.log(high("aa b")) // "aa"

