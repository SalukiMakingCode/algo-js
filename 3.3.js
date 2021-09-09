const readlineSync = require("readline-sync");
let arr = [1,2,3,4,5];
let arr2 = []
//for (let elem of arr) {
//    arr2.push(elem);
//}

arr2 = arr.slice();

console.log(arr2);