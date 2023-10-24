const defaultState = {
  results: 'Choose your attack!',
  playerChoice: '',
  computerChoice: '',
  playerScore: 0,
  computerScore: 0,
}

window.STATE = {
  ...defaultState,
  setChoices(playerChoice, computerChoice) {
    if (STATE.isGameOver()) {
      reset();
    }
    STATE.playerChoice = playerChoice;
    STATE.computerChoice = computerChoice;
    const winner = getWinner(playerChoice, computerChoice);
    if (winner === 'player') {
      STATE.playerScore++;
    }
    if (winner === 'computer') {
      STATE.computerScore++;
    }
    STATE.results = getResultString();
    render();
  },
  isGameOver() {
    return STATE.playerScore === 5 || STATE.computerScore === 5;
  },
};

function getWinner() {
  if (STATE.playerChoice === STATE.computerChoice) {
    return 'tie';
  }
  if (STATE.playerChoice === 'Rock') {
    return STATE.computerChoice === 'Scissors' ? 'player' : 'computer';
  }
  if (STATE.playerChoice === 'Paper') {
    return STATE.computerChoice === 'Rock' ? 'player' : 'computer';
  }
  if (STATE.playerChoice === 'Scissors') {
    return STATE.computerChoice === 'Paper' ? 'player' : 'computer';
  }
}

function getResultString() {
  const result = getWinner();
  if (result === 'tie') {
    return `It\'s a tie! Both chose ${STATE.playerChoice}.`;
  } else if (result === 'player') {
    return `You win! ${STATE.playerChoice} beats ${STATE.computerChoice}.`;
  } else {
    return `You lose! ${STATE.computerChoice} beats ${STATE.playerChoice}.`
  }
}

function reset() {
  Object.assign(STATE, defaultState);
}