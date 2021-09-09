const readlineSync = require("readline-sync");
let shoeSize = Number (readlineSync.question("What's your shoe size ?"));
let birthYear = Number (readlineSync.question("What's your birth year ?"));
let calcul = shoeSize*2;
calcul=calcul+5;
calcul=calcul*50;
calcul=calcul-birthYear;
calcul=calcul+1766;
console.log(calcul);
