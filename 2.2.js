const readlineSync = require("readline-sync");
let min = Number (readlineSync.question("give me the min number ?"));
let max = Number (readlineSync.question("give me the max number ?"));
if (min>max) {
    console.log("Your min is greater than your max, you understand nothing ! ");
}
else {
    let current = Number(readlineSync.question("give me the current number ?"));
    if (current >= min && current <= max) console.log("Current is between min and max");
    else console.log("Current is not between min and max");
}