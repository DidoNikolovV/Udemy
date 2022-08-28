'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉Correct number';

// // let guess = document.querySelector('.score').value;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// let guess = document.querySelector('.guess').value = 23;


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.querySelector('.score').textContent;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);


    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔No number!';

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉Correct number';

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

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
