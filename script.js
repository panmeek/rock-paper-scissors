let computerScore = 0;
let humanScore = 0;

let computerChoiceElem = document.querySelector(".computer-choice");
let humanChoiceElem = document.querySelector(".human-choice");

let computerScoreElem = document.querySelector(".computer-score");
let humanScoreElem = document.querySelector(".human-score");

let endGameTextElem = document.createElement("div");
endGameTextElem.classList.add("end-game-text");

let endGameButtonsElem = document.createElement("div");
endGameButtonsElem.classList.add("end-game-buttons");
let restartGameButtonElem = document.createElement("button");
let stopGameButtonElem = document.createElement("button");
endGameButtonsElem.appendChild(restartGameButtonElem);
endGameButtonsElem.appendChild(stopGameButtonElem);

let availablePicks = document.querySelector(".available-picks");
availablePicks.addEventListener("click", getHumanChoice);

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

function getHumanChoice(event) {
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
}

function choiceTextToEmoji(choice) {
    switch(choice) {
        case "rock":
            return "🪨";
            break;
        case "paper":
            return "📄";
            break;
        case "scissors":
            return "✂️";
            break;
    }
}

function playRound(humanChoice, computerChoice) {
    computerChoiceElem.textContent = choiceTextToEmoji(computerChoice);
    humanChoiceElem.textContent = choiceTextToEmoji(humanChoice);

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

    if (computerScore === 5 || humanScore === 5) {
        endGame(humanScore > computerScore);
    }
}

function endGame(isWinnerHuman) {
    availablePicks.removeEventListener("click", getHumanChoice);
    if (isWinnerHuman) {
        endGameTextElem.textContent = "You won! Want to play again?";
    } else {
        endGameTextElem.textContent = "You lost! Want to play again?";
    }
    restartGameButtonElem.textContent = "Yes";
    stopGameButtonElem.textContent = "No";

    restartGameButtonElem.addEventListener("click", () => {
        window.location.reload();
    })
    stopGameButtonElem.addEventListener("click", () => {
        document.body.removeChild(endGameTextElem);
        document.body.removeChild(endGameButtonsElem);
    })

    document.body.appendChild(endGameTextElem);
    document.body.appendChild(endGameButtonsElem);
}
