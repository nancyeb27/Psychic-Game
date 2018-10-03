




document.onkeyup = function () {
    
var computerChoices = ["a","b","c","x","y","x"]
var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();

var wins = "0";
var losses = "0";
var guessesLeft = "9";
var totalGuesses = "0";

console.log(userGuess)

//computer random choice
var computerGuess = computerChoices [Math.floor(Math.random( Math.floor) * computerChoices
    .length)];

    console.log(computerGuess);
    
  if (userGuess === computerGuess) {
        wins++; 
        alert ("Wins: " + wins);  
        alert ("You Win!");

  }
    else {
               
        alert ("Please choose agian.");
        losses++;
        guessesLeft--;
        totalGuesses++;
        alert ("Losses: " + losses);
        alert ("Guess Remaining: " + guessesLeft);
        alert ("Total Guesses: " + totalGuesses++);
}
    

var html = "Guess what letter I am thinking of  " +
     "wins " + wins + "Losses " + losses + "Total Guesses " + totalGuesses + "Guess Remaining"
      + guessesLeft;


  
document.querySelector("#guess").innerHTML = html;

}





