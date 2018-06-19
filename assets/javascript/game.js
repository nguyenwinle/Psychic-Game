
// when our html and css is loaded on page, we then run our js
$(document).ready(function() {
    // set up counter variables for wins, losses, guesses left and letters guessed.
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    var winCount = 0;
    var lossCount = 0;
    var guesses = 20;
    var guessLetters = [];
    
    // get each element and store it to a variable
    var wins = document.getElementsByClassName("win");
    var loss = document.getElementsByClassName("loss");
    var guess = document.getElementsByClassName("guessleft");
    var yourGuess = document.getElementsByClassName("yourguesses");

    document.onkeyup = function(event) {

    var userGuess = event.key;

    if (userGuess === randomLetter) {
        winCount = winCount + 1;
            guesses--;
            guessLetters.push(userGuess);
            document.querySelector(".win").innerHTML = winCount;
            document.querySelector(".guessleft").innerHTML = guesses;
            document.querySelector(".yourguesses").innerHTML = guessLetters;
    }

    if (userGuess !== randomLetter) {
        lossCount++;
            guesses--;
            guessLetters.push(userGuess);
            document.querySelector(".loss").innerHTML = lossCount;
            document.querySelector(".guessleft").innerHTML = guesses;
            document.querySelector(".yourguesses").innerHTML = guessLetters;
    }

    if (guesses === 0) {
        alert("Game Over!");
   
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