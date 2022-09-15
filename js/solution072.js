// TASK: accept a DNA strand as a string, return the complementary side. 'A' and 'T' are interchangeable and 'C' and 'G'.
// SOLUTION:    loop through each char of the string and check if it is an 'a' (lowercase or uppercase) then push a 't' and vise versa
//              and the same for 'c' and 'g'

function DNAStrand(dna) {
    let string = ''
    for (let i = 0; i < dna.length; i++) {
        if (dna[i].toLowerCase() === 'a') {
            string += 'T'
        }
        else if (dna[i].toLowerCase() === 't') {
            string += 'A'
        }
        else if (dna[i].toLowerCase() === 'c') {
            string += 'G'
        }
        else if (dna[i].toLowerCase() === 'g') {
            string += 'C'
        }
    }
    return string
}

console.log(DNAStrand('ATCG')) // 'TAGC'