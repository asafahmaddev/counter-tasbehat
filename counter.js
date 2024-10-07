/*

// Initialize count variable
let count = 0;

// Get the elements
const counterDisplay = document.getElementById('counterDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Increment the counter
incrementBtn.addEventListener('click', () => {
    count++;
    counterDisplay.innerText = count;
});

// Reset the counter
resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.innerText = count;
});

*/

let count = 0;

// Get the elements
var counterDisplay = document.getElementById('counterDisplay');
var incrementBtn = document.getElementById('incrementBtn');
var resetBtn = document.getElementById('resetBtn');

// Increment the counter
incrementBtn.addEventListener('click', () => {
    count++;
    counterDisplay.innerText = count;
});

// Reset the counter
resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.innerText = count;
});