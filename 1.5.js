const readlineSync = require("readline-sync");
let num1 = Number (readlineSync.question("What's your first number ?"));
let num2 = Number (readlineSync.question("What's your second number ?"));
num1 = Math.floor(num1);
let total = num1 * num2;
console.log(total);
