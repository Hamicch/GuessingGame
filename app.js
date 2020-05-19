/**
 GAME FUNCTIONS
 - Player must guess a name from the array of names.
 - Player gets a certain amount of guesses.
 - Notify player of guesses remaining.
 - Notify the player of correct answer if lose.
 - Let player choose to play again.
 */



 // Game Values
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        guessesLeft = 3,
        winningDay = 'Friday',
        firstDayOfWeek = 'Sunday',
        lastDayOfWeek = 'Saturday';
       


// UI Elements
const game = document.querySelector('#game'),
        guessInput = document.getElementById('guess-input'),
        guessBtn = document.getElementById('guess-value'),
        message = document.querySelector('.message'),
        dayOne = document.querySelector('.day-one'),
        dayTwo = document.querySelector('.day-two');
         

// Assign UI dayOne and dayTwo
dayOne.textContent = firstDayOfWeek;
dayTwo.textContent = lastDayOfWeek;
         
// Listen for guess
guessBtn.addEventListener('click', () => {
        console.log(guessInput.value);
})