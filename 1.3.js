const readlineSync = require("readline-sync");
let firstName = readlineSync.question("What's your fisrt name ?");
console.log("Hello " + firstName);