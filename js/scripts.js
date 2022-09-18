//Business Logic

function PigDice(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.activePlayer;
}

PigDice.prototype.activePlayer = function () {
  if (playerOne.hasDice === true) {
    playerOne.hasDice = true;
    playerTwo.hasDice = false;
    activePlayer = playerTwo
  } else if (playerTwo.hasDice === true) {
    playerOne.hasDice = false;
    playerTwo.hadDice = true;
    activePlayer = playerOne
  } else {
    activePlayer = playerOne;
    playerOne.hasDice = true;
  }
}

//player business logic

function Player(playerName) {
  this.playerName = playerName;
  this.scoreTotal = 0;
  this.currentTotal = 0;
  this.rollCount = 0;
  this.hasDice = false;
}

function dieRoll() {
  rollCount = Math.floor(Math.random() * 6) + 1; 
}

function addTotalScore() {
  if (rollCount === 1) {
    return this.currentTotal = 0;
  } else {
    return currentTotal += rollCount;
  }
}

// User Interface

function switchActivePlayer(){
  if ()
}