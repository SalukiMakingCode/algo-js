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
            otherRectangle.topLeftYPos < this.topLeftYPos - otherRectangle.length ) {
         return false
        }
        else {
         return true
        }
    }
}
let rectangle1 = new Rectangle (10, 20, 30, 40);
let rectangle2 = new Rectangle (100, 100,10,20);
let rectangle3 = new Rectangle (20, 20, 40, 50);
let rectangle4 = new Rectangle (0, 0, 20, 20);
console.log(rectangle1);
console.log(rectangle2);
console.log(rectangle3);
console.log(rectangle1.collides(rectangle2));
console.log(rectangle1.collides(rectangle3));
console.log(rectangle1.collides(rectangle4));
