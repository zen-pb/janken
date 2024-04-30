let playerScore = 0,
  computerScore = 0,
  gameRound = 0;

const scoreFill = document.createElement("img");
const gameRoundText = document.querySelector("h2");
const playerPoints = document.querySelector("#playerPoints");
const playerHand = document.querySelector("#playerHand");
const modalGameOver = document.querySelector("dialog");
const modalVerdict = document.querySelector("#verdict");
const computerHand = document.querySelector("#computerHand");
const computerPoints = document.querySelector("#computerPoints");
const displaySentence = document.querySelector("#sentence");

scoreFill.src = "./assets/images/fill.png";

playGame();

function playGame() {
  const rockBtn = document.querySelector("#rock");
  const paperBtn = document.querySelector("#paper");
  const scissorsBtn = document.querySelector("#scissors");

  rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });

  paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });

  scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });
}

function getComputerChoice() {
  let handsArray = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * handsArray.length);
  return handsArray[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  roundHandler();
  handUI(playerChoice, computerChoice);
  gameLogic(playerChoice, computerChoice);
}

function handUI(playerChoice, computerChoice) {
  if (playerChoice === "rock") {
    playerHand.src = "./assets/images/rock - left.png";
  } else if (playerChoice === "paper") {
    playerHand.src = "./assets/images/paper - left.png";
  } else {
    playerHand.src = "./assets/images/scissors - left.png";
  }

  if (computerChoice === "rock") {
    computerHand.src = "./assets/images/rock - right.png";
  } else if (computerChoice === "paper") {
    computerHand.src = "./assets/images/paper - right.png";
  } else {
    computerHand.src = "./assets/images/scissors - right.png";
  }
}

function roundHandler() {
  gameRound++;

  if (gameRound === 6) {
    gameRoundText.textContent = "Game Over!";
    modalVerdict.textContent = scoreCheck();
    newGame();
  } else if (gameRound === 5) {
    gameRoundText.textContent = "Final Round";
  } else {
    gameRoundText.textContent = "Round " + gameRound;
  }
}

function gameLogic(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    displaySentence.textContent = "Tie!";
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      scorePLayerUI();
    } else {
      displaySentence.textContent = "You lose! Paper beats Rock.";
      scoreComputerUI();
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      scorePLayerUI();
    } else {
      displaySentence.textContent = "You lose! Scissors beats Paper.";
      scoreComputerUI();
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      scorePLayerUI();
    } else {
      displaySentence.textContent = "You lose! Rock beats Scissors.";
      scoreComputerUI();
    }
  }
}

function scoreCheck() {
  if (playerScore < computerScore) {
    return "You lose...";
  }

  return "You win!";
}

function scorePLayerUI() {
  displaySentence.textContent = "You win!";
  playerScore++;
  playerPoints.prepend(scoreFill);
  playerPoints.removeChild(playerPoints.lastChild);
}

function scoreComputerUI() {
  computerScore++;
  computerPoints.prepend(scoreFill);
  computerPoints.removeChild(computerPoints.lastChild);
}

function newGame() {
  modalGameOver.showModal();

  modalGameOver.addEventListener("click", () => {
    reset();
    modalGameOver.close();
  });
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  gameRound = 0;

  gameRoundText.textContent = "Start a round!";
  playerHand.src = "./assets/images/rock - left.png";
  computerHand.src = "./assets/images/rock - right.png";
  displaySentence.textContent =
    "The game starts as soon as you press a button!";
}
