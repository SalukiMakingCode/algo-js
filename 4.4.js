const readlineSync = require("readline-sync");
let total= 0;
let arr = [] ;
// calculate the average of an array of number
function average(arr) {
    for (let elem of arr) {
        total=total + elem;
    }
    return total=total/arr.length;
}
// calculate the minimum number of an array of number
function min(arr) {
    return Math.min(...arr);
}
// calculate the maximum number of an array of number
function max(arr) {
    return Math.max(...arr);
}
function rand10() {
    return Math.floor(Math.random() * 10);
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
console.log ("average : " + average(arr));
console.log ("minimum : " + min(arr));
console.log ("maximum : " + max(arr));