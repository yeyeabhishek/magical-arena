class Player {
    /**
   * Creating new Player.
   * @param {string} name - The name of the player.
   * @param {number} health - The health points of the player.
   * @param {number} strength - The strength multiplier of the player.
   */
    constructor(name, health, strength, attack) {
        if (health <= 0 || strength <= 0 || attack <= 0) {
            throw new Error("Health, strength, and attack must be positive integers.");
        }
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    /**
     * Checking if the player is still alive.
     * @returns {boolean} - True if the player's health is greater than 0, false otherwise.
     */
    isAlive() {
        return this.health > 0;
    }

    /**
   * Simulating a dice roll for the player.
   * @returns {number} - The result of the dice roll (1-6).
   */
    diceRoll() {
        const roll = Math.floor(Math.random() * 6) + 1;
        console.log(`Dice Roll for ${this.name}: ${roll}`);
        return roll;
    }

    /**
   * Reducing the player's health by a specified amount of damage.
   * @param {number} damage - The amount of damage to be subtracted from health.
   */
    takeDamage(damage) {
        this.health = Math.max(this.health - damage, 0);
    }
}

module.exports = Player;