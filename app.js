/**
 GAME FUNCTIONS
 - Player must guess a name from the array of week days.
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
        let guess = guessInput.value.toLowerCase();

        //Validate 
        for (let i in daysOfWeek) {
                if (daysOfWeek[i] === guess) {
                }
                // Check if won
                if (guess === winningDay.toLowerCase()) {

                        gameOver(true, `${winningDay} is correct, YOU WIN!`);
                }
                else if (guess === '') {
                        setMessage(`Input a guess!`, 'red');
                        // Change border color
                        guessInput.style.borderColor = 'red';
                }
                else {
                        // Wrong day
                        guessesLeft -= 1;

                        console.log(guessesLeft);
                        

                        if (guessesLeft === 0) {
                                //Game over, you lost.

                                gameOver(false, `Game Over, you lost. The correct day was ${winningDay}`)

                        } else {
                                // Game continues answer is wrong

                                // Change border color
                                guessInput.style.borderColor = 'color';
                                // Change text color
                
                                // Clear input
                                guessInput.value = '';

                                // Tell user its the wrong number
                                setMessage(` ${guess} is not correct, ${guessesLeft} guesses left`, );
                        }
                        
                }
        }
});

// Game over
function gameOver(won, msg) {
        let color;
        won === true ? color = 'green' : color = 'red';
        // Disable input
        guessInput.disable = true;
        // Change border color
        guessInput.style.borderColor = 'color';
        // Change text color
        guessInput.style.color = 'color'


        // Set message
        setMessage(msg);
}

// Set message function
function setMessage(msg, color) {
        message.style.color = color;
        message.textContent = msg;
}