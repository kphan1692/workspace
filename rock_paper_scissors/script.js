// Declare players score variables
let humanScore = 0;
let computerScore = 0;
document.getElementById("result_div").innerText =
  "Computer Score: " + computerScore + "\nHuman Score: " + humanScore;

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
    return "You both win! You both got rock";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "You lose! Paper beats rock";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats scissors";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats rock";
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    return "You both win! You both got paper";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "You lose! Scissors beat paper";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "You lose! Rock beats scissors";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beat paper";
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    return "You both win! You both got scissors";
  }
}
//************************************ */
////Event Listener for each button
//************************************* */
let result = "test";
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    let humanChoice = "";
    button.getAttribute("id") == "btn_Rock" ? (humanChoice = "Rock") : 0;
    button.getAttribute("id") == "btn_Paper" ? (humanChoice = "Paper") : 0;
    button.getAttribute("id") == "btn_Scissors"
      ? (humanChoice = "Scissors")
      : 0;

    let computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);
    //Updating score
    document.getElementById("result_div").innerText =
      "Computer Score: " + computerScore + "\nHuman Score: " + humanScore;
      
 //Push log after each turn
  const log_div = document.querySelector("#log_div");
  const log_content = document.createElement("div");
  log_content.classList.add("log_content");
  log_content.textContent = result;
  log_div.appendChild(log_content);
    
  });

 
});

//************************************ */
//DISPLAYING RESULT USING DOM MANIP
//************************************* */

function playGame() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  console.log(
    "Computer Score: " + computerScore + "\nHuman Score: " + humanScore
  );

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
} //playGame()

//playGame();
