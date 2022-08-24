// TASK: given an object of Fighter class, write a method that passes in 2 fighters as the first 2 params and the name of the fighter that attacks first. return the name of the winning fighter.
// SOLUTION:    write a while loop that runs as long as either of the fighters health is <= 0
//              in the loop subtract the damage of the first attacking fighter from the other fighters health, update the current health
//              and then subtract the damage of the second attacking fighter from the other fighters health, update the current health
//              at the end of the loop, return the name of the fighter that has health > 0

// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function() { return this.name; }
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
    if (fighter1.name === firstAttacker) {
        while (fighter1.health > 0 && fighter2.health > 0) {
            fighter2.health -= fighter1.damagePerAttack
            if (fighter2.health > 0) {
                fighter1.health -= fighter2.damagePerAttack    
            }
        }
    }
    else if (fighter2.name === firstAttacker) {
        while (fighter2.health > 0 && fighter1.health > 0) {
            fighter1.health -= fighter2.damagePerAttack
            if (fighter1.health > 0) {
                fighter2.health -= fighter1.damagePerAttack    
            }
        }
    }
    return fighter1.health <= 0 ? fighter2.name : fighter1.name
}

console.log(declareWinner(new Fighter('jack', 10, 3), new Fighter('jill', 8, 4), 'jack')) // jack