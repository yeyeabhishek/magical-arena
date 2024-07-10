# Magical Arena Game

## Description
This is a  simulation of a magical arena game where two players fight until one of them is defeated. Each player has health, strength, and attack attributes. Players take turns of attacking and defending, with the damage dealt based on dice rolls.

## How to Run
1. Ensure you have Node.js installed on your machine.
2. Unzip the provided file.
3. Navigate to the unzipped project directory.
4. Install dependencies by running:npm install
5. Run the game using the following command:node src/index.js
## How to Run Tests
Ensure you have Jest installed globally or locally in the project directory.
Run the tests using the following command:npm test
(To run the test use nvm 14,16,18)

## EXAMPLE OUTPUT   :  
Battle Start!
Turn 1:  Attacker Player A
Dice Roll for Player A: 2
Dice Roll for Player B: 6
Player A attacks Player B:
Attack Roll: 2 * 10 = 20
Defend Roll: 6 * 10 = 60
Player B takes 0 damage, health is now 100

Turn 2:  Attacker Player B
Dice Roll for Player B: 5
Dice Roll for Player A: 1
Player B attacks Player A:
Attack Roll: 5 * 5 = 25
Defend Roll: 1 * 5 = 5
Player A takes 20 damage, health is now 30

Turn 3:  Attacker Player A
Dice Roll for Player A: 6
Dice Roll for Player B: 6
Player A attacks Player B:
Attack Roll: 6 * 10 = 60
Defend Roll: 6 * 10 = 60
Player B takes 0 damage, health is now 100

Turn 4:  Attacker Player B
Dice Roll for Player B: 2
Dice Roll for Player A: 2
Player B attacks Player A:
Attack Roll: 2 * 5 = 10
Defend Roll: 2 * 5 = 10
Player A takes 0 damage, health is now 30

Turn 5:  Attacker Player A
Dice Roll for Player A: 3
Dice Roll for Player B: 5
Player A attacks Player B:
Attack Roll: 3 * 10 = 30
Defend Roll: 5 * 10 = 50
Player B takes 0 damage, health is now 100

Turn 6:  Attacker Player B
Dice Roll for Player B: 3
Dice Roll for Player A: 6
Player B attacks Player A:
Attack Roll: 3 * 5 = 15
Defend Roll: 6 * 5 = 30
Player A takes 0 damage, health is now 30

Turn 7:  Attacker Player A
Dice Roll for Player A: 1
Dice Roll for Player B: 6
Player A attacks Player B:
Attack Roll: 1 * 10 = 10
Defend Roll: 6 * 10 = 60
Player B takes 0 damage, health is now 100

Turn 8:  Attacker Player B
Dice Roll for Player B: 4
Dice Roll for Player A: 6
Player B attacks Player A:
Attack Roll: 4 * 5 = 20
Defend Roll: 6 * 5 = 30
Player A takes 0 damage, health is now 30

Turn 9:  Attacker Player A
Dice Roll for Player A: 3
Dice Roll for Player B: 6
Player A attacks Player B:
Attack Roll: 3 * 10 = 30
Defend Roll: 6 * 10 = 60
Player B takes 0 damage, health is now 100

Turn 10:  Attacker Player B
Dice Roll for Player B: 4
Dice Roll for Player A: 3
Player B attacks Player A:
Attack Roll: 4 * 5 = 20
Defend Roll: 3 * 5 = 15
Player A takes 5 damage, health is now 25

Turn 11:  Attacker Player A
Dice Roll for Player A: 1
Dice Roll for Player B: 4
Player A attacks Player B:
Attack Roll: 1 * 10 = 10
Defend Roll: 4 * 10 = 40
Player B takes 0 damage, health is now 100

Turn 12:  Attacker Player B
Dice Roll for Player B: 4
Dice Roll for Player A: 6
Player B attacks Player A:
Attack Roll: 4 * 5 = 20
Defend Roll: 6 * 5 = 30
Player A takes 0 damage, health is now 25

Turn 13:  Attacker Player A
Dice Roll for Player A: 2
Dice Roll for Player B: 2
Player A attacks Player B:
Attack Roll: 2 * 10 = 20
Defend Roll: 2 * 10 = 20
Player B takes 0 damage, health is now 100

Turn 14:  Attacker Player B
Dice Roll for Player B: 3
Dice Roll for Player A: 4
Player B attacks Player A:
Attack Roll: 3 * 5 = 15
Defend Roll: 4 * 5 = 20
Player A takes 0 damage, health is now 25

Turn 15:  Attacker Player A
Dice Roll for Player A: 3
Dice Roll for Player B: 5
Player A attacks Player B:
Attack Roll: 3 * 10 = 30
Defend Roll: 5 * 10 = 50
Player B takes 0 damage, health is now 100

Turn 16:  Attacker Player B
Dice Roll for Player B: 1
Dice Roll for Player A: 4
Player B attacks Player A:
Attack Roll: 1 * 5 = 5
Defend Roll: 4 * 5 = 20
Player A takes 0 damage, health is now 25

Turn 17:  Attacker Player A
Dice Roll for Player A: 2
Dice Roll for Player B: 2
Player A attacks Player B:
Attack Roll: 2 * 10 = 20
Defend Roll: 2 * 10 = 20
Player B takes 0 damage, health is now 100

Turn 18:  Attacker Player B
Dice Roll for Player B: 5
Dice Roll for Player A: 3
Player B attacks Player A:
Attack Roll: 5 * 5 = 25
Defend Roll: 3 * 5 = 15
Player A takes 10 damage, health is now 15

Turn 19:  Attacker Player A
Dice Roll for Player A: 1
Dice Roll for Player B: 4
Player A attacks Player B:
Attack Roll: 1 * 10 = 10
Defend Roll: 4 * 10 = 40
Player B takes 0 damage, health is now 100

Turn 20:  Attacker Player B
Dice Roll for Player B: 1
Dice Roll for Player A: 3
Player B attacks Player A:
Attack Roll: 1 * 5 = 5
Defend Roll: 3 * 5 = 15
Player A takes 0 damage, health is now 15

Turn 21:  Attacker Player A
Dice Roll for Player A: 6
Dice Roll for Player B: 6
Player A attacks Player B:
Attack Roll: 6 * 10 = 60
Defend Roll: 6 * 10 = 60
Player B takes 0 damage, health is now 100

Turn 22:  Attacker Player B
Dice Roll for Player B: 5
Dice Roll for Player A: 1
Player B attacks Player A:
Attack Roll: 5 * 5 = 25
Defend Roll: 1 * 5 = 5
Player A takes 20 damage, health is now 0

Battle End! Player B wins the battle
Player B wins the battle

## EXAMPLE TEST RESULTS

Test Suites: 2 passed, 2 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.564 s, estimated 1 s
Ran all test suites.


