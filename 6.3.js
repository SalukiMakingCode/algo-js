const readlineSync = require("readline-sync");
let nballcollusion=0;
let nballcollusionlisible="";
let collusionArray=[];
let collusionArrayLisible=[];
let cumul=0;

class Rectangle {
    constructor (topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length=length;
    }
    collides(otherRectangle) {
        if (otherRectangle.topLeftXPos > this.topLeftXPos + this.width ||
            otherRectangle.topLeftXPos < this.topLeftXPos - otherRectangle.width ||
            otherRectangle.topLeftYPos > this.topLeftYPos + this.length ||
            otherRectangle.topLeftYPos < this.topLeftYPos - otherRectangle.length) {
            return false
        }
        else {
            return true
        }
    }
}

function collusion (Rectangle, otherRectangle) {
    if (otherRectangle.topLeftXPos > Rectangle.topLeftXPos + Rectangle.width ||
        otherRectangle.topLeftXPos < Rectangle.topLeftXPos - otherRectangle.width ||
        otherRectangle.topLeftYPos > Rectangle.topLeftYPos + Rectangle.length ||
        otherRectangle.topLeftYPos < Rectangle.topLeftYPos - otherRectangle.length) {
        return false
    }
    else {
        return true
    }
}

let rectangle1 = new Rectangle (10, 20, 60, 80);
let rectangles = new Array(1000);
let nbcollusion = 0;

for (let i = 0; i < 1000; i++) {
    w = Math.floor(Math.random() * 1000);
    x = Math.floor(Math.random() * 1000);
    y = Math.floor(Math.random() * 1000);
    z = Math.floor(Math.random() * 1000);
    rectangles[i] = new Rectangle(w, x, y, z);
if (rectangle1.collides(rectangles[i])===true) nbcollusion++;
}

for (let i=0; i<1000; i++) {
    for (let j=0; j<1000; j++) {
        if (i !== j) {
            if (collusion(rectangles[i], rectangles[j])) {
                collusionArray.push("rec"+i+" col rec"+j);
                nballcollusion++;
                nballcollusionlisible++;
                if (j===999) {
                    collusionArrayLisible.push("rec "+i+" col "+nballcollusionlisible+" rec, ce qui fait "+nballcollusion+" collusion cumulées");
                    nballcollusionlisible=0;
                }
                }
            }
        }
    }

nballcollusion=nballcollusion/2;
//for (elem of collusionArray) {
//    console.log(elem);
//}
for (elem of collusionArrayLisible) {
    console.log(elem);
}
//console.log("Le premier rectangle est en collusion avec " + nbcollusion+ " rectangle(s)");
console.log("il y a " +nballcollusion+ " collusion de rectangle(s)");



