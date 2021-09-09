const readlineSync = require("readline-sync");
let shoeSize = Number (readlineSync.question("What's your shoe size ?"));
let birthYear = Number (readlineSync.question("What's your birth year ?"));
let total = shoeSize*2;
total=total+5;
total=total*50;
total=total-birthYear;
total=total+1766;
console.log(total);