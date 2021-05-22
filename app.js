const background = document.querySelector('body');
const playAgainButton = document.querySelector('.play-again');
const secretNumber = document.querySelector('.secret-number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
// const message = document.querySelector('.message');
const messageElement = document.querySelector('.message');
const currentScore = document.querySelector('.score');
const currentHighScore = document.querySelector('.high-score');

let secretNumberValue = Math.trunc(Math.random() * 20) + 1;
// secretNumber.textContent = secretNumberValue;
let score = 20;
let highscore = 0;

const showMessage = function (message) {
  messageElement.textContent = message;
};

// checkButton.addEventListener('click', function () {
//   const guessValue = Number(guessInput.value);

//   if (!guessValue) {
//     message.textContent = 'Please guess a number between 1-20';
//   } else if (guessValue === secretNumberValue) {
//     message.textContent = 'CONGRATULATIONS, YOU WIN!';
//     background.style.backgroundColor = '#60b347';
//     secretNumber.style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       currentHighScore.textContent = highscore;
//     }
//   } else if (guessValue > secretNumberValue) {
//     if (score > 1) {
//       message.textContent = 'Too high!';
//       score--;
//       currentScore.textContent = score;
//     } else {
//       message.textContent = 'Sorry, you lose!';
//       currentScore.textContent = 0;
//     }
//   } else if (guessValue < secretNumberValue) {
//     if (score > 1) {
//       message.textContent = 'Too low!';
//       score--;
//       currentScore.textContent = score;
//     } else {
//       message.textContent = 'Sorry, you lose!';
//       currentScore.textContent = 0;
//     }
//   }
// });

// DRY refactor
checkButton.addEventListener('click', function () {
  const guessValue = Number(guessInput.value);

  if (!guessValue) {
    showMessage('Please guess a number between 1-20');
  } else if (guessValue === secretNumberValue) {
    showMessage('CONGRATULATIONS, YOU WIN!');
    background.style.backgroundColor = '#60b347';
    secretNumber.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      currentHighScore.textContent = highscore;
    }
  } else if (guessValue !== secretNumberValue) {
    if (score > 1) {
      showMessage(guessValue > secretNumberValue ? 'Too high!' : 'Too low!');
      score--;
      currentScore.textContent = score;
    } else {
      showMessage('Sorry, you lose!');
      currentScore.textContent = 0;
    }
  }
});

playAgainButton.addEventListener('click', function () {
  secretNumber.textContent = '?';
  secretNumberValue = Math.trunc(Math.random() * 20) + 1;
  guessInput.value = '';
  showMessage('Start guessing...');
  score = 20;
  currentScore.textContent = score;
  background.style.backgroundColor = '#222';
  secretNumber.style.width = '15rem';
});
