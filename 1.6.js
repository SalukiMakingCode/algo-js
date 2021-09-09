const readlineSync = require("readline-sync");
let num1 = Number (readlineSync.question("What's your first number ?"));
let num2 = Number (readlineSync.question("What's your second number ?"));
console.log(num1 % num2);