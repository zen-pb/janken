let playerScore = 0,
  computerScore = 0;

playGame();

function playGame() {
  while (playerScore !== 3 && computerScore !== 3) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You win!");
  } else {
    console.log("You lose! Try again...");
  }
}

function getPlayerChoice() {
  let choice = prompt(
    "Please type your chosen hand: 'rock' for Rock, 'paper' for Paper, and 'scissors' for Scissors"
  );
  return choice;
}

function getComputerChoice() {
  let handsArray = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * handsArray.length);
  return handsArray[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice === computerChoice) {
    console.log("Tie!");
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You win!");
      playerScore++;
    } else {
      console.log("You lose! Paper beats Rock.");
      computerScore++;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win!");
      playerScore++;
    } else {
      console.log("You lose! Scissors beats Paper.");
      computerScore++;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win!");
      playerScore++;
    } else {
      console.log("You lose! Rock beats Scissors.");
      computerScore++;
    }
  } else {
    console.log("Dude, what did you enter?");
  }
}
