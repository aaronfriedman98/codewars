//loop through every char in a string and for each vowel add 1 to the count. vowels: a, e, i, o, u
//P: string, with or without spaces, lowercase letters
//R: int

function countVowels(string){
    let count = 0
    for(let i = 0; i < string.length; i++){
        if(string[i]==='a' || string[i]==='e' || string[i]==='i' || string[i]==='o' || string[i]==='u'){
            count++
        }
    }
    return console.log(count)
}


countVowels("hello") // 2
countVowels("greetings") // 3
countVowels("how are you doing?") // 7