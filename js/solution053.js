// GOAL: simple if/else function


const saleHotdogs = (n) => {
    if (n < 100) return 100*n
    else if (n >= 5 && n < 10) return 95*n
    else if (n >= 10) return 90*n
}
