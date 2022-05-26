// input hour, minute, seconds, and calculate the total amount of mileseconds 
// P: 3 positive ints
// R: positive int



const past = (h,m,s) => console.log(s*1000 + m*1000*60 + h*60*60*1000)

past(1,1,1)  // 3661000