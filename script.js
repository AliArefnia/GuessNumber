'use strict';

let rndNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;
const displayResult = function (Result) {
  document.querySelector('.result').textContent = Result;
};

const displayScore = function (Score) {
  document.querySelector('.currentScore').textContent = Score;
};

document.querySelector('.checkButton').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guessedNumber').value);
  if (!guess) {
    displayResult('You must choose a number');
  } else if (guess === rndNumber) {
    displayResult('You won');
    document.querySelector('body').style.backgroundColor = '#adff2f';
    document.querySelector('.rndNumber').textContent = rndNumber;
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.highScore').textContent = highScore;
    }
  } else if (guess !== rndNumber) {
    if (currentScore > 1) {
      guess > rndNumber ? displayResult('too High') : displayResult('too Low');
      currentScore--;
      displayScore(currentScore);
    }
  }
});

document.querySelector('.againButton').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#000';
  rndNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  displayScore(currentScore);
  displayResult('Enter Your Number');
  document.querySelector('.rndNumber').textContent = '?';
  document.querySelector('.guessedNumber').value = '';
});
