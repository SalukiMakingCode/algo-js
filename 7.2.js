const readlineSync = require("readline-sync");
let nbFibonacci = Number (readlineSync.question("How many number ?"));
let suite= "";
let before=1;
let beforebefore=0;
let next=0;
if (nbFibonacci===0) {
    suite="You should killing me !";
}
if (nbFibonacci===1) {
    suite="0";
}
if (nbFibonacci===2) {
    suite="0, 1";
}
if (nbFibonacci>2) {
    suite="0, 1";
    for (i=2; i<nbFibonacci; i++) {
        next=before+beforebefore;
        beforebefore=before;
        before=next;
        suite=suite + ", "+ next;
    }
}
console.log(suite);