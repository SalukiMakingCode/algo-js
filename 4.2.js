const readlineSync = require("readline-sync");
function rand10() {
    return (Math.floor(Math.random() * 10)+1);
}
console.log(rand10());