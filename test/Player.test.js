const Player  = require('../src/Player');

test("PLayer Initialisation", () => {
    const player =  new Player('Player A', 50, 5, 10);
    expect(player.name).toBe('Player A');
    expect(player.health).toBe(50);
    expect(player.strength).toBe(5);
    expect(player.attack).toBe(10);
})


test('Player isAlive method ', ()=>{
    const player = new Player('Player A', 50,5,10);
    expect(player.isAlive()).toBe(true);
    player.health = 0;
    expect(player.isAlive()).toBe(false);
})

test('Player takeDamage method', () =>{
    const player  = new Player('Player A',  50,5,10);
    player.takeDamage(20);
    expect(player.health).toBe(30);
    player.takeDamage(40);
    expect(player.health).toBe(0);
} );

test('Player dice roll method', () =>{
    const player =  new Player('Player A',  50, 5, 10);
    const roll = player.diceRoll();
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
})



