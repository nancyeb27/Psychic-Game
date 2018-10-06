// ESTABLISH var for user and computer 

var computerChoices = ["a","b","c","d","n","q","x","y","z"]
var letters = ['-','-','-','-','-','-','-','-','-',]
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = "";
var computerGuess = "";
var userGuess = "";

      // TRACK letters/keys pressed(keypress)
      
document.onkeyup = function (event) {
       userGuess = event.key;
       computerGuess = computerChoices[Math.floor(Math.random( Math.floor) * computerChoices
            .length)];
            console.log( "userguess",event.key);
            console.log("computerGuess",computerGuess);
      
            // CREATE counter

      if ((userGuess === computerGuess) && (guessesLeft > 0)) {                  
            wins++; 
            guessesLeft--;
            
      // CREATE array ofthe specific letters that the user typed. 

      //  letters = lettersGuessed + userguess;
       guessedLetters.push(letters);
             letters = [];
            console.log(letters);

      // function Letters() {
      // for (var i = 0; i < userChoices.length; i++); 
      //       userChoices[i] = letters;
      //             alert("Letters Guessed", letters ); 
      //             console.log(letters);
      //             alert ("Wins: " + wins);  
      //             alert ("You Win!");
      
             // increment total guesses, have a limit of total guesses
            //  RESEARCH for loop
            //  RESET code 
            
  }
    else if ((userGuess !== computerGuess) && (guessesLeft > 0)) {
            losses++; 
            
               alert ("Sorry, the computer picked a differant letter, please try again.")
               guessesLeft--;
               console.log("guesses left",guessesLeft);
    }               
            if (guessesLeft > 0) {
                  alert('You have ' + guessesLeft + ' guesses left.');
    }
                  else if (guessesLeft === 0) {
                        alert("Game Over");
                        document.location.reload();
                        alert("Try again, you have guesses!")
                        
      }


            // Display data on browser page

            
      function display() {
            wins.innerHTML = wins;
            loses.innerHTML = loses;
            guessLeft.innerHTML = guessesLeft;
            letterGuessed.innerHTML = guessedLetters.join(',');
          }
          






}

            
            
            
      
      //         var newtotalguesses = function() {
      //         document.querySelector("#lettersGuessed").innerHTML = "Your guesses so far:" + lettersguessed;
      //         alert("Letters Guessed");
      //  };

      //   computerGuess = computerChoices[Math.floor(Math.random( Math.floor) * computerChoices
      //       .length)];

      //       console.log(computerGuess);
            
      

    
  
// document.querySelector("#game").innerHTML = html;







