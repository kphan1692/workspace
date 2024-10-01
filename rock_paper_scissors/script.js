//script.js

//declare players score variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let output = Math.floor(Math.random() * 3);
  switch (output) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Please enter your choice: rock - paper - scissors");
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("Hue von! You both got rock");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats rock");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats sicssors");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats rock");
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("Hue von! You both get paper");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! sicssors beats paper");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! Rock beats scissors");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beat paper");
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    console.log("You both get scissors");
  }
}

export function playGame() {
  for (var i = 0; i < 5; i++) {
    playRound();
  }
}
