function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    let computerChoiceElem = document.querySelector(".computer-choice");
    let humanChoiceElem = document.querySelector(".human-choice");

    let computerScoreElem = document.querySelector(".computer-score");
    let humanScoreElem = document.querySelector(".human-score");

    let availablePicks = document.querySelector(".available-picks");
    availablePicks.addEventListener("click", (event) => {
        let target = event.target;

        switch(target.id) {
            case "rock":
                playRound("rock", getComputerChoice());
                break;
            case "paper":
                playRound("paper", getComputerChoice());
                break;
            case "scissors":
                playRound("scissors", getComputerChoice());
                break;
        }
    })

    function getComputerChoice() {
        let randomNumber = Math.ceil(Math.random() * 3);
        if (randomNumber === 1) {
            return "rock";
        } else if (randomNumber === 2) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    function playRound(humanChoice, computerChoice) {
        computerChoiceElem.textContent = computerChoice;
        humanChoiceElem.textContent = humanChoice;

        if (
            humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper"
        ) {
            humanScore++;
        } else if (humanChoice === computerChoice) {
            return;
        } else {
            computerScore++;
        }

        computerScoreElem.textContent = computerScore;
        humanScoreElem.textContent = humanScore;
    }
}

playGame();
