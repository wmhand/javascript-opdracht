console.log('main.js loaded');

// The '>' is the child-selector: '.board > .field' selects all child elements with class 'field'.
// from the parent element with class 'board'.
// The result is a list with all the fields on the board.
const fields = document.querySelectorAll('.board > .field');

// get the element of the reset button.
const resetButton = document.querySelector(".reset-button");

// Task 1: 
// Add a click-event listener to 'resetButton', which uses the resetGame-function to reset the board (see task 4).

// Variable to store the last clicked number.
let lastClickedNumber = 0;

// Always start with a fresh new board.
resetGame();

for(let i = 0; i < fields.length; i++) {
    const field = fields[i];

    // Loop through all fields and add a click-event listener to each of them.
    // The function that is called is the function 'onFieldClick', with 
    // two arguments: the clicked field and the index number 'i'.
    field.addEventListener('click', function() {
        onFieldClick(field, i);
    })
}


function onFieldClick(field, clickedNumber) {
    console.log("You have clicked " + clickedNumber);
console.log(field);
field.textContent = clickedNumber;
    // Task 2: set the right number on the clicked field (0 - 8).


    // Task 3: check if clickedNumber is higher or lower than lastClickedNumber.

    // Set lastClickedNumber to clickedNumber.
    lastClickedNumber = clickedNumber;
}

/*
* Task 4
* Give body to the resetGame function.
* Make sure this works: 
  -Set all fields to '?'.
  -Reset other data if needed.
*/
function resetGame() {
console.log('Reset button clicked!');
let btn = document.querySelector(".reset-button")
function reset() {
    window.location = window.location.href;
}
btn.addEventListener('click', reset);   // Hint: use a for-loop to loop through all fields.
   
}


