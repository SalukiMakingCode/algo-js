const readlineSync = require("readline-sync");
class circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos=this.xPos + xOffset;
        this.yPos=this.yPos + yOffset;
    }
    get surface () {
        return (Math.PI*Math.pow(this.radius, 2));
    }
}
let circle1 = new circle(4,4,6);
console.log(circle1);
console.log(circle1.surface);
circle1.move(5, 4);
console.log(circle1);
