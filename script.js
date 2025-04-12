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
