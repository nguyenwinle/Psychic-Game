
// when our html and css is loaded on page, we then run our js
$(document).ready(function() {
    // set up counter variables for wins, losses, guesses left and letters guessed.
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    var winCount = 0;
    var lossCount = 0;
    var guesses = 10;
    var guessLetters = [];

    document.onkeyup = function(event) {

    var userGuess = event.key;

    if (userGuess) {
        guesses--;
        guessLetters.push(userGuess);
        document.querySelector(".guessleft").innerHTML = guesses;
        document.querySelector(".yourguesses").innerHTML = guessLetters;

    }

    if (userGuess === randomLetter) {
        winCount = winCount + 1;
        document.querySelector(".guessleft").innerHTML = "10";
        guesses = 10;
        document.querySelector(".yourguesses").innerHTML = "";
        guessLetters = [];
        document.querySelector(".win").innerHTML = winCount;
        alert("You win!");
    
    }

    if (guesses === 0) {
        lossCount++;
            document.querySelector(".loss").innerHTML = lossCount;

    }

    if (guesses === 0) {
        alert("Game Over!");
        document.querySelector(".guessleft").innerHTML = "10";
        guesses = 10;
        document.querySelector(".yourguesses").innerHTML = "";
        guessLetters = [];
   
    }


    }


    //   var computerChoices = ["r", "p", "s"];

    //   // This function is run whenever the user presses a key.
    //   document.onkeyup = function(event) {
  
    //     // Determines which key was pressed.
    //     var userGuess = event.key;
  
    //     // Randomly chooses a choice from the options array. This is the Computer's guess.
    //     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
    //     // Only run the following code block if the user presses "r" or "p" or "s".
    //     if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
    //       // Select the div with the id "game", and insert the following HTML into it.
    //       document.querySelector("#game").innerHTML = "You chose: " + userGuess + ". The computer chose: " + computerGuess;
    //     }
  
    //   };
  




    // randomize a letter

    // when user types a letter,
        //append and show letter on html;

    // if user letter === random letter
        // winCount++
        // show the count onto wins
    // if user letter !== random letter
        // loss--
        // show the count onto losses
        // if loss = 0
            //alert(gameover);
            // show the count onto guesses left
    //

    // use on key 
  



});