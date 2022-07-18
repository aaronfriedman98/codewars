// GOAL: take in position parameter, and take in roll parameter, and move the 2 times the roll parameter to final position and return position
// P: int, int (position, roll)
// R: int (position)
// SOLUTION:    return position + (roll*2)

const move = (position, roll) => position + (roll*2)