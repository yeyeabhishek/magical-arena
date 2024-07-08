class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    isAlive(){
        return this.health > 0;
    }

    diceRoll() {
        return Math.floor(Math.random() * 6) + 1;
    }

    attackDamage(damage) {
        this.health -= damage;
        if(this.health < 0) this.health = 0;
    }

}

module.exports = Player;