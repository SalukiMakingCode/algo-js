const readlineSync = require("readline-sync");
//calculate the surface
function calcSurface (longueur, largeur) {
    surface = longueur * largeur ;
    return surface;
}
let longueur = readlineSync.question("la longueur ?");
let largeur = readlineSync.question("la largeur ?");
console.log(calcSurface(longueur, largeur));