
// when our html and css is loaded on page, we then run our js
$(document).ready(function() {
    // set up counter variables for wins, losses, guesses left and letters guessed.
    var winCount = 0;
    var lossCount = 5;
    var guesses = 5;
    
    // get each element and store it to a variable
    var wins = $(".win");
    var loss = $(".loss");
    var guess = $(".guessleft");
    var yourGuess = $(".yourguesses");


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
    $().keyup(function() {

    })




});