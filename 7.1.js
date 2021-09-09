const readlineSync = require("readline-sync");
let magicNumber=(Math.floor(Math.random()*100))+1;
let playerNumber = Number (readlineSync.question("Guess the number :"));
while (playerNumber !== magicNumber) {
    if (magicNumber<playerNumber) console.log ("Too high");
    else console.log ("Too low");
    playerNumber = Number (readlineSync.question("Guess the number :"));
}
console.log ("Well guessed !");