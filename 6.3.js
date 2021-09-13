const readlineSync = require("readline-sync");
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

console.log("Le premier rectangle est en collusion avec " + nbcollusion+ " rectangle(s)");
