const readlineSync = require("readline-sync");
let pointA = [1, 1];
let pointB = [2, 2];
function calcDistance (A1, A2, B1, B2) {
  return Math.sqrt( Math.pow((B1 - A1),2) + Math.pow ((B2 - A2),2) );
}

console.log(calcDistance(pointA[0], pointA[1], pointB[0], pointB[1]));