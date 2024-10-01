// Declare players score variables
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

  if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("You both win! You both got rock");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose! Paper beats rock");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You win! Rock beats scissors");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win! Paper beats rock");
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("You both win! You both got paper");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beat paper");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats scissors");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You win! Scissors beat paper");
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("You both win! You both got scissors");
  }
}

function playGame() {
  for (var i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    console.log(
      "Computer Score: " + computerScore + "\nHuman Score: " + humanScore
    );
  }

  if (computerScore == humanScore)
    console.log(
      "You both win!!!" +
        "\nOverall, Computer Score: " +
        computerScore +
        "\nHuman Score: " +
        humanScore
    );
  if (computerScore > humanScore)
    console.log(
      "Computer Won!!!" +
        "\nOverall, Computer Score: " +
        computerScore +
        "\nHuman Score: " +
        humanScore
    );
  if (computerScore < humanScore)
    console.log(
      "You Won!!!" +
        "\nOverall, Computer Score: " +
        computerScore +
        "\nHuman Score: " +
        humanScore
    );
}

playGame();
