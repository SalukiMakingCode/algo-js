const readlineSync = require("readline-sync");
let age = Number (readlineSync.question("What's your age ?"));
if (age>17) {
    console.log("You are an adult")
}
else {
    console.log("You are not yet an adult")
}