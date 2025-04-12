function playGame() {
    let computerScore = 0;
    let humanScore = 0;

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

    function getHumanChoice() {
        return prompt("Rock, paper or scissors?").toLowerCase();
    }

    function playRound(humanChoice, computerChoice) {
        if (
            humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper"
        ) {
            alert(`You win, ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        } else if (humanChoice === computerChoice) {
            alert("It's a draw!");
            return;
        } else {
            alert(`You lose, ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(
            getHumanChoice(),
            getComputerChoice()
        );
    }
    alert(
        `Game Score\nPlayer: ${humanScore}\nComputer: ${computerScore}`
    );
}

playGame();