const  Player = require("../src/Player");
const Arena  = require("../src/Arena");

test('Arena fight method', () =>  {
    const playerA = new Player('Player A',  50,  5, 10);
    const playerB = new Player('Player B',  100, 10, 5);
    const  arena =  new Arena(playerA, playerB);
    
    const winner = arena.fight();
    expect(winner.isAlive()).toBe(true);
    expect([playerA, playerB]).toContain(winner);
})