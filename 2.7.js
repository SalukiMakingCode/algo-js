const readlineSync = require("readline-sync");
n = Number (readlineSync.question("Give me n :"));
let i=0;
let total=0;
let num=0;
while (i<n) {
    num = Number (readlineSync.question("Give me n :"));
    total=total+num;
    i++;
}
console.log(total);