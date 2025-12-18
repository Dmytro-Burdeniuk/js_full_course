'use strict';

const DEFAULT_SCORE = 20;
const DEFAULT_BACKGROUND_COLOR = '#222';
const DEFAULT_NUMBER_WIDTH = '15rem'
const DEFAULT_MESSAGE = 'Start guessing...'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = DEFAULT_SCORE;
let highscrore = 0; 
let symbol = document.querySelector('.number').textContent;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

function logicGame () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {

    // When no input
    displayMessage('⛔️ No number');

    // When player wins 
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'

    if (score > highscrore) {
      highscrore = score;
      document.querySelector('.highscore').textContent = highscrore

    }
  }
    //When guess is wrong 
    else if (guess !== secretNumber) {
        if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
        score--;
        document.querySelector('.score').textContent = score;

        // When player lost
      } else {
    displayMessage('😭 You lost');
        document.querySelector('.score').textContent = 0;
      }
    }
}

function newGame () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = DEFAULT_SCORE;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = symbol;
  document.querySelector('body').style.backgroundColor = DEFAULT_BACKGROUND_COLOR;
  document.querySelector('.number').style.width = DEFAULT_NUMBER_WIDTH;
  displayMessage(DEFAULT_MESSAGE);
  document.querySelector('.guess').value = '';
}

document.querySelector('.check').addEventListener('click', logicGame);
document.querySelector('.again').addEventListener('click', newGame);

newGame()


