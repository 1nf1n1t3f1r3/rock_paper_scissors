// Rock = 0
// Paper = 1
// Scissors = 2

// Initialize

// Variables
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

let humanChoice;
let computerChoice;

let winnerDeclared = false;

// References
const humanScoreSpan = document.querySelector("#human-score");
const computerScoreSpan = document.querySelector("#computer-score");
const roundCountSpan = document.querySelector("#round-counter");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const roundResult = document.querySelector("#round-result");
const gameWinner = document.querySelector("#game-winner");

// Make it Readable
function choiceToString(choice) {
  if (choice === 0) return "Rock";
  if (choice === 1) return "Paper";
  if (choice === 2) return "Scissors";
}

// Human Input
rockButton.addEventListener("click", () => {
  humanChoice = 0;
  getComputerChoice();
  resolveRound();
});

paperButton.addEventListener("click", () => {
  humanChoice = 1;
  getComputerChoice();
  resolveRound();
});

scissorsButton.addEventListener("click", () => {
  humanChoice = 2;
  getComputerChoice();
  resolveRound();
});

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
}

function resolveRound() {
  const human = choiceToString(humanChoice);
  const computer = choiceToString(computerChoice);

  if (
    (computerChoice == 0 && humanChoice == 2) ||
    (computerChoice == 1 && humanChoice == 0) ||
    (computerChoice == 2 && humanChoice == 1)
  ) {
    roundResult.textContent = `You chose ${human}, computer chose ${computer}. You lose!`;
    computerScore += 1;
    roundCount += 1;
  }

  if (
    (humanChoice == 0 && computerChoice == 2) ||
    (humanChoice == 1 && computerChoice == 0) ||
    (humanChoice == 2 && computerChoice == 1)
  ) {
    roundResult.textContent = `You chose ${human}, computer chose ${computer}. You win!`;
    humanScore += 1;
    roundCount += 1;
  }

  if (
    (computerChoice == 0 && humanChoice == 0) ||
    (computerChoice == 1 && humanChoice == 1) ||
    (computerChoice == 2 && humanChoice == 2)
  ) {
    roundResult.textContent = `You both chose ${human}. It's a draw!`;
    roundCount += 1;
  }
  updateScores();
}

function updateScores() {
  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
  roundCountSpan.textContent = roundCount;
  checkWinner();
}

function checkWinner() {
  if (winnerDeclared) return;

  if (humanScore === 5) {
    gameWinner.textContent = "You won!";
    winnerDeclared = true;
  } else if (computerScore === 5) {
    gameWinner.textContent = "Computer won!";
    winnerDeclared = true;
  }
}
