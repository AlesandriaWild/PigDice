Pig Dice:
 -Rules-
	1. each turn, player rolls die until 1 or player "holds", 1 = no score.
	2. if any other number rolled, add to turn total and continues
	3. "Hold" turn total is added to score then goes to next player.
	4. first player to 100 = winner

//Business logic
Constructors:
-playerturn
-playerRolls
-playerTotal <-- for turn
-totalScore
-diceNumber

function activePlayer()

function diceRoll()

function totalScore()

funciton hold()


//ui logic
player 1 field
player 2 field
totals
hold button

Describe: activePlayer()

Test: "It should return player 1 when that player is active"
Code: activePlayer("1")
Expected Output: true


Test "It should return player 2 when that player is active"
Code: activePlayer("2")
Expected Output: true

Describe: dieRoll()

Test "It will return a randomly generated number out of 6"
Code: let roll = dieRoll()
Expected Output: 1, 2, 3, 4, 5, 6

Describe: totalScore()

Test: "It will return total points after a roll"
Code:
const totalScore = 0;
const rollCount = 5;
Expected Output: 5

Test: "It will return 0 if a roll equals 1"
Code:
const totalScore = 0;
const rollCount = 1;
Expected Output: 0