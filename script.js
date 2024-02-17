'use strict';

let rndNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;

document.querySelector('.checkButton').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guessedNumber').value);
  if (!guess) {
    document.querySelector('.result').textContent = 'You must choose a number';
  } else if (guess === rndNumber) {
    document.querySelector('.result').textContent = 'You won';
    document.querySelector('body').style.backgroundColor = '#adff2f';
    document.querySelector('.rndNumber').textContent = rndNumber;
  } else if (guess > rndNumber) {
    if (currentScore > 1) {
      document.querySelector('.result').textContent = 'too High';
      currentScore--;
      document.querySelector('.currentScore').textContent = currentScore;
      document.querySelector('.currentScore').textContent;
    } else {
      document.querySelector('.result').textContent = 'You lost';
      document.querySelector('.currentScore').textContent = 0;
    }
  } else if (guess < rndNumber) {
    if (currentScore > 1) {
      document.querySelector('.result').textContent = 'too low';
      currentScore--;
      document.querySelector('.currentScore').textContent = currentScore;
      document.querySelector('.currentScore').textContent;
    } else {
      document.querySelector('.result').textContent = 'You lost';
      document.querySelector('.currentScore').textContent = 0;
    }
  }
  console.log(guess);
});

document.querySelector('.againButton').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#000';
  rndNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;
  document.querySelector('.currentScore').textContent = currentScore;
  document.querySelector('.result').textContent = 'Enter Your Number';
  document.querySelector('.rndNumber').textContent = '?';
  document.querySelector('.guessedNumber').value = '';
});
