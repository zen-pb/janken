let Janken = () => {
  let handsArray = ["rock", "paper", "scissors"];
  let playerHand = prompt("Please type your hand: 'Rock', 'Paper', 'Scissors'");

  playerHand = playerHand.toLowerCase();

  let computerHand = getRandomValue(handsArray);

  console.log(playerHand);
  console.log(computerHand);

  if (playerHand === computerHand) {
    console.log("Tie!");
  } else if (playerHand === "rock") {
    if (computerHand === "scissors") {
      console.log("You win!");
    } else {
      console.log("You lose...");
    }
  } else if (playerHand === "paper") {
    if (computerHand === "rock") {
      console.log("You win!");
    } else {
      console.log("You lose...");
    }
  } else if (playerHand === "scissors") {
    if (computerHand === "paper") {
      console.log("You win!");
    } else {
      console.log("You lose...");
    }
  } else {
    console.log("Dude, what did you input?");
  }
};

let getRandomValue = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

Janken();
