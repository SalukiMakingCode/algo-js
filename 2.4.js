const readlineSync = require("readline-sync");
let i=1;
let calc=0;
while (i<101)
{
    if (i%2===0) {
        calc=i/3;
        console.log(calc);
    }
    else {
        calc=i/2;
        console.log(calc);
    }
    i++;
}