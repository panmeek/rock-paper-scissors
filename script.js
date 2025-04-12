let computerScore = 0
let humanScore = 0

function getComputerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3)
  if (randomNumber === 1) {
    return "rock"
  } else if (randomNumber === 2) {
    return "paper"
  } else {
    return "scissors"
  }
}

function getHumanChoice() {
  return prompt("Rock, paper or scissors?").toLowerCase()
}
