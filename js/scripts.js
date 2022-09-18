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
  } else if (this.playerTwo.hasDice === true) {
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
  this.rollCount = Math.floor(Math.random() * 6) + 1; 
}