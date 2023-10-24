// ************* MAIN *************
render();
init();

function init() {
  document.querySelectorAll('.choice-btn').forEach((btn) => {
    const playerChoice = btn.textContent;
    btn.addEventListener('click', getPlayerChoiceHandler(playerChoice));
  });
}

// ************* HELPERS *************
function getPlayerChoiceHandler(playerChoice) {
  return () => {
    STATE.setChoices(playerChoice, getRandomChoice());
  };
}

function getRandomChoice() {
  const selections = ['Rock', 'Paper', 'Scissors'];
  const index = Math.floor(Math.random() * 3);
  return selections[index];
}
