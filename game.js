// using let as mosh says this is best practice now 
// variabel letters wins losses and guessed letters good and bad
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
randomLetters = "";
guessesLeft = 0;
guessedLetters = 0;
Wins = 0; 
Losses = 0;
defaultGuessesLeft = 9;
// start game and reset when lost or won

 // start new game
 window.addEventListener("keypress", onKeyPress, false);
 newGame();
 
// new game  

function newGame(){
guessedLetters = [];
generateRandomLetter();
resetguesses(); 
displayOnScreen('wins');
displayOnScreen('losses');
}
// make all answers lowercase 
// put in if else statements use mdm page and && operator 
function onKeyPress(key) {
letter = key.keytoLowerCase();
if (letters.includes(letter,o) && guessedLetters.includes(letter,o)===false){
guessedLetters.push(letter);
printKeyPressed(letter);
}
}
if (guessesLeft === 0) {
  lossCount++;
  displayOnScreen("losses", `Losses: ${String(lossCount)}`);
  newGame();
}
if (String(letter) == String(randomLetter)){
winCount ++;
displayOnScreen("wins", `Wins: ${String(winCount)}`);
newGame();
}
//random letter generator this may need to be moved 
function generateRandomLetter() {
  randomLetter = letters[Math.floor(Math.random() * letters.length)];
}