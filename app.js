const background = document.querySelector('body');
const secretNumber = document.querySelector('.secret-number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const currentScore = document.querySelector('.score');

let secretNumberValue = Math.trunc(Math.random() * 20) + 1;
let score = 20;

secretNumber.textContent = secretNumberValue;

checkButton.addEventListener('click', function () {
  const guessValue = Number(guessInput.value);
  console.log(guessValue, typeof guessValue);

  if (!guessValue) {
    message.textContent = 'Please guess a number between 1-20';
  } else if (guessValue === secretNumberValue) {
    message.textContent = 'CONGRATULATIONS, YOU WIN!';
    background.style.backgroundColor = '#60b347';
    secretNumber.style.width = '30rem';
  } else if (guessValue > secretNumberValue) {
    if (score > 1) {
      message.textContent = 'Too high!';
      // score = score - 1;
      score--;
      currentScore.textContent = score;
    } else {
      message.textContent = 'Sorry, you lose!';
      currentScore.textContent = 0;
    }
  } else if (guessValue < secretNumberValue) {
    if (score > 1) {
      message.textContent = 'Too low!';
      score--;
      currentScore.textContent = score;
    } else {
      message.textContent = 'Sorry, you lose!';
      currentScore.textContent = 0;
    }
  }
});
