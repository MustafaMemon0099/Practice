let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".Choice");
const userScoreDisplay = document.getElementById("User-Number");
const compScoreDisplay = document.getElementById("comp-number");
const msgBox = document.getElementById("Msg-box");


function getComputerChoice() {
  const options = ["Rock", "paper", "Scissor"];
  const randomIndex = Math.floor(Math.random() * 3); // 0, 1, 2
  return options[randomIndex];
}


function playGame(userChoice) {
  const compChoice = getComputerChoice();

  if (userChoice === compChoice) {
    // Draw condition
    msgBox.innerText = `Draw! Both chose ${userChoice}`;
    msgBox.style.backgroundColor = "#7c7c7c";
  } else if (
    (userChoice === "Rock" && compChoice === "Scissor") ||
    (userChoice === "paper" && compChoice === "Rock") ||
    (userChoice === "Scissor" && compChoice === "paper")
  ) {
    //user wins
    userScore++;
    userScoreDisplay.innerText = userScore;
    msgBox.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msgBox.style.backgroundColor = "green";
  } else {
   
    compScore++;
    compScoreDisplay.innerText = compScore;
    msgBox.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    msgBox.style.backgroundColor = "red";
  }
}


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});