// ESTABLISH var for user and computer 

var computerChoices = ["a","b","c","d","n","q","x","y","z"]
var letters = []
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = "";
var computerGuess = computerChoices[Math.floor(Math.random(Math.floor) * computerChoices
      .length)];
      
   
document.onkeyup = function (event) {
      var userGuess = event.key.toLowerCase();
      letters.push(userGuess);
             console.log( "userguess",event.key);
             console.log("computerGuess",computerGuess);

          
      if (userGuess === computerGuess) {                  
            wins++;
            letters = [];
            guessesLeft = 9;
            computerGuess = computerChoices[Math.floor(Math.random(Math.floor) * computerChoices
                  .length)];
            document.getElementById('wins').innerHTML = wins;  
            alert("You WIN! Let's play again,you have 9 guesses!")
            
            console.log(guessesLeft);
      }      
                
  
      else if ((userGuess !== computerGuess) && (guessesLeft > 0)) {
               
            alert ("Sorry, the computer picked a differant letter, please try again.")
            guessesLeft--;
            document.getElementById("guessLeft").innerHTML = guessesLeft;
            document.getElementById("letters").innerHTML = letters;
               console.log("guesses left",guessesLeft);
}               
      else if (guessesLeft === 0) {
            losses ++;
            alert("Game Over");
            letters = [];
            guessesLeft = 9;
            computerGuess = computerChoices[Math.floor(Math.random(Math.floor) * computerChoices
                  .length)];
            document.getElementById("losses").innerHTML = losses;
            alert("Pick a new letter to try again, you have 9 new guesses");
             console.log(losses)
	
}          
    }

          

          






// if (guessesLeft === 0)

            
            
            
      
      //         var newtotalguesses = function() {
      //         document.querySelector("#lettersGuessed").innerHTML = "Your guesses so far:" + lettersguessed;
      //         alert("Letters Guessed");
      //  };

      //   computerGuess = computerChoices[Math.floor(Math.random( Math.floor) * computerChoices
      //       .length)];

      //       console.log(computerGuess);
            
      

    
  
// document.querySelector("#game").innerHTML = html;







