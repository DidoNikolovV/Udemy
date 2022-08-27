'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉Correct number';

// // let guess = document.querySelector('.score').value;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// let guess = document.querySelector('.guess').value = 23;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = '⛔No number!'
    }
})
