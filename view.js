window.render = () => {
  renderResult();
  renderChoices();
  renderScores();
}

function renderResult() {
  const resultsNode = document.querySelector('.results-display');
  resultsNode.textContent = STATE.results;
}

function renderChoices() {
  const playerNode = document.querySelector('.player-choice');
  const computerNode = document.querySelector('.computer-choice');
  playerNode.textContent = STATE.playerChoice;
  computerNode.textContent = STATE.computerChoice;
}

function renderScores() {
  const playerNode = document.querySelector('.player .score');
  const computerNode = document.querySelector('.computer .score');
  playerNode.textContent = getScoreString(STATE.playerScore);
  computerNode.textContent = getScoreString(STATE.computerScore);
}

function getScoreString(score) {
  return `Score: ${score}`
}