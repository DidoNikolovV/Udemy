'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉Correct number';

// // let guess = document.querySelector('.score').value;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// let guess = document.querySelector('.guess').value = 23;


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector('.score').textContent;
let highscore = 0;


document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);


    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔No number!';

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉Correct number';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😢You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

        // When guess it too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😢You lost the game!';
            document.querySelector('.score').textContent = 0;

        }

    }
})


document.querySelector('.again').addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...'

})