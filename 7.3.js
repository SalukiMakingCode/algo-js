const readlineSync = require("readline-sync");
let playerNumber = Number (readlineSync.question("Give me the number :"));
let suite = "";
for (i=playerNumber-1; i>1; i--)
 {
     if (playerNumber%i===0) {
         suite=i + " " + suite ;
     }
 }
if (suite==="") suite="it's a prime number";
console.log(suite);