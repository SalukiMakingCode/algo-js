const readlineSync = require("readline-sync");
let arr = [1,2,3,4,5];
let min = Math.min(...arr);
let max = Math.max(...arr);

console.log("min : "+min);
console.log("max : "+max);
