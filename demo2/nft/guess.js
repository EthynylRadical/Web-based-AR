  let randomNumber = 'duck';
  const guesses = document.querySelector('.guesses');
  const lastResult = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');
  const guessSubmit = document.querySelector('.guessSubmit');
  const guessField = document.querySelector('.guessField');
  let guessCount = 1;
  let resetButton;
  guessField.focus();
  function checkGuess() {
    const userGuess=String(guessField.value);;
    if(guessCount === 1) {
      guesses.textContent = 'Previous results: ';
    }
    guesses.textContent += userGuess + ' ';
    if(userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You are right!';
      lastResult.style.backgroundColor = 'red';
      lowOrHi.textContent = '';
      setGameOver();
    } else if(guessCount === 3) {
      lastResult.textContent = '!!!GAME OVER!!!';
      lowOrHi.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = 'You are wrong！';
      lastResult.style.backgroundColor = 'blue';
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  guessSubmit.addEventListener('click', checkGuess);
  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start a new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }
  function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = "duck";
  }
