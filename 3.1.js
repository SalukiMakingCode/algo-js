const readlineSync = require("readline-sync");
let arr = [1,2,3,4,5];
let total=0;
for (let elem of arr) {
    total=total+elem;
}
console.log(total);