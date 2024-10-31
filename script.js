const player1ScoreElem = document.querySelector(".score1");
const player2ScoreElem = document.querySelector(".score2");
const current1Elem = document.querySelector(".currentscore1");
const current2Elem = document.querySelector(".currentscore2");

const rollDiceBtn = document.getElementById("rolldice");
const holdBtn = document.getElementById("hold");
const newGameBtn = document.getElementById("newgame");
const diceImage = document.getElementById("diceImage");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let gamePlaying = true;

function switchPlayer() {
  currentScore = 0;
  document.querySelector(`.currentscore${activePlayer + 1}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
}

function rollDice() {
  if (gamePlaying) {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `./img/dice${dice}.jpeg`; // Zar görselini günceller

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`.currentscore${activePlayer + 1}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
}

function hold() {
  if (gamePlaying) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.score${activePlayer + 1}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      gamePlaying = false;
      document.querySelector(`.name${activePlayer + 1}`).textContent = `PLAYER ${activePlayer + 1} WINS!`;
    } else {
      switchPlayer();
    }
  }
}

function newGame() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  player1ScoreElem.textContent = 0;
  player2ScoreElem.textContent = 0;
  current1Elem.textContent = 0;
  current2Elem.textContent = 0;
  diceImage.src = 'dice-1.png';
  document.querySelector(`.name1`).textContent = "PLAYER 1";
  document.querySelector(`.name2`).textContent = "PLAYER 2";
}

rollDiceBtn.addEventListener("click", rollDice);
holdBtn.addEventListener("click", hold);
newGameBtn.addEventListener("click", newGame);