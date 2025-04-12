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
            console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        } else if (humanChoice === computerChoice) {
            console.log("It's a draw!");
            return;
        } else {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(
            getHumanChoice(),
            getComputerChoice()
        );
    }
    console.log(
        `Game Score\nPlayer: ${humanScore}\nComputer: ${computerScore}`
    );
}