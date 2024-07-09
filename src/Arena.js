const Player = require('./Player');

class Arena {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.turnCounter = 1;
    }

    fight() {
        let attacker = this.player1.health <= this.player2.health ? this.player1 : this.player2;
        let defender = attacker === this.player1 ? this.player2 : this.player1;

        console.log("Battle Start!");

        while (attacker.isAlive() && defender.isAlive()) {
            console.log(`Turn ${this.turnCounter}:  Attacker ${attacker.name}`)
            this.turn(attacker, defender);
            [attacker, defender] = [defender, attacker];
            this.turnCounter++;
        }

        const winner = attacker.isAlive() ? attacker : defender;
        console.log(`Battle End! ${winner.name} wins the battle`);
        return winner;
    }

    turn(attacker, defender) {
        const attackingRoll = attacker.diceRoll();
        const defendingRoll = defender.diceRoll();

        const attackDamage = attacker.attack * attackingRoll;
        const defendDamage = defender.strength * defendingRoll;

        const damageDealt = Math.max(attackDamage - defendDamage, 0);
        defender.takeDamage(damageDealt);

        console.log(`${attacker.name} attacks ${defender.name}:`);
        console.log(`Attack Roll: ${attackingRoll} * ${attacker.attack} = ${attackDamage}`);
        console.log(`Defend Roll: ${defendingRoll} * ${defender.strength} = ${defendDamage}`);
        console.log(`${defender.name} takes ${damageDealt} damage, health is now ${defender.health}\n`);
    }
}

module.exports = Arena;
