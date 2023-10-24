const choices = {
  ROCK: 'Rock',
  PAPER: 'Paper',
  SCISSORS: 'Scissors',
};

function getComputerChoice() {
  const selections = [choices.ROCK, choices.PAPER, choices.SCISSORS];
  const index = Math.floor(Math.random() * 3);
  return selections[index];
}

function getPlayerChoice(wasError = false) {
  let input;
  if (wasError) {
    input = prompt('Incorrect Input! Please input "Rock" "Paper" or "Scissors:"').toUpperCase();
  } else {
    input = prompt('Input "Rock" "Paper" or "Scissors":').toUpperCase();
  }
  if (choices[input] === undefined) {
    return getPlayerChoice(true);
  }
  return choices[input];
}

function getWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'tie';
  }
  if (playerSelection === choices.ROCK) {
    return computerSelection === choices.SCISSORS ? 'player' : 'computer';
  }
  if (playerSelection === choices.PAPER) {
    return computerSelection === choices.ROCK ? 'player' : 'computer';
  }
  if (playerSelection === choices.SCISSORS) {
    return computerSelection === choices.PAPER ? 'player' : 'computer';
  }
}

function playRound(playerSelection, computerSelection) {
  const result = getWinner(playerSelection, computerSelection);
  if (result === 'tie') {
    return `It\'s a tie! Both chose ${playerSelection}.`;
  } else if (result === 'player') {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    // const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const result = getWinner(playerChoice, computerChoice);
    const resultStr = playRound(playerChoice, computerChoice);
    if (result === 'player') {
      playerWins++;
    }
    if (result === 'computer') {
      computerWins++;
    }
    console.log(resultStr);
  }
  console.log(`Player wins: ${playerWins}\nComputer wins: ${computerWins}`)
}

game();

function runTests() {
  // Ties
  test(playRound(choices.ROCK, choices.ROCK), 'It\'s a tie! Both chose Rock.');
  test(playRound(choices.PAPER, choices.PAPER), 'It\'s a tie! Both chose Paper.');
  test(playRound(choices.SCISSORS, choices.SCISSORS), 'It\'s a tie! Both chose Scissors.');

  // Player win
  test(playRound(choices.ROCK, choices.SCISSORS), 'You win! Rock beats Scissors.');
  test(playRound(choices.PAPER, choices.ROCK), 'You win! Paper beats Rock.');
  test(playRound(choices.SCISSORS, choices.PAPER), 'You win! Scissors beats Paper.');

  // Computer win
  test(playRound(choices.ROCK, choices.PAPER), 'You lose! Paper beats Rock.');
  test(playRound(choices.PAPER, choices.SCISSORS), 'You lose! Scissors beats Paper.');
  test(playRound(choices.SCISSORS, choices.ROCK), 'You lose! Rock beats Scissors.');
}

// runTests();


function test(actual, expected) {
  if (actual === expected) {
    return console.log('success');
  } else {
    console.log(`Expected: ${expected} Recieved: ${actual}`);
  }
}
