// ESTABLISH var for user and computer 

var computerChoices = ["a","b","c","x","y","z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var totalGuesses = 0;
var computerGuess = "";
var userGuess = "";

document.onkeyup = function (event) {
       userGuess = event.key;
       computerGuess = computerChoices[Math.floor(Math.random( Math.floor) * computerChoices
            .length)];
      console.log( "userguess",event.key);
      console.log("computerGuess",computerGuess);
      // console.log(guessedLetters);

      if ((userGuess === computerGuess) && (guessesLeft > 0)) {
                    
        wins++; 
      //   guessesLeft = 9;
      //   totalGuesses.length = 0;
      //   computerGuess.length = 0;
         
      console.log(computerGuess);
            alert ("Wins: " + wins);  
            alert ("You Win!");

  }
    else if ((userGuess !== computerGuess) && (guessesLeft < 0)) {
               guessesLeft--;
               alert ("No more guess left - try truck driving for a career.")
    }
      else {
            losses++; 
        guessesLeft = 9;
      //   totalGuesses.length = 0;
      //   computerGuess.length =0;
        
        computerGuess = computerChoices[Math.floor(Math.random( Math.floor) * computerChoices
            .length)];

            console.log(computerGuess);
            

      }
}        
    
  
// document.querySelector("#game").innerHTML = html;







