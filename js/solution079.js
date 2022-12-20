function DNAtoRNA(dna) {
    let newDna = ''
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] === 'T') {
        newDna += 'U'
      }
      else {
        newDna+=dna[i]
        }
    }
    return newDna
  }
