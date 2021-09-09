const readlineSync = require("readline-sync");
let arr = [''] ;
function rand10() {
    return (Math.floor(Math.random() * 10)+1);
}
function multiRand(n) {
    for (i=0; i<n; i++)
    {
        arr.push(rand10());
    }
}
let howMany = readlineSync.question("Combien de fois ?");
multiRand(howMany);
for (let elem of arr) {
    console.log (elem + " ");
}