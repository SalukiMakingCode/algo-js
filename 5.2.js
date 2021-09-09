const readlineSync = require("readline-sync");
let name = "";
let year = "";
let cast = [];
let askCast="";
let myObject = { };
let json = "";
let castRandom = [];
let checkRandom = [];
function askTVSerie() {
    name = readlineSync.question("Your favorite serie ?");
    year = readlineSync.question("In witch year does it product ?");
    while (askCast!="exit") {
        askCast=readlineSync.question("Names of the cast members ? (when finish, tape exit)");
        if (askCast!="exit") cast.push(askCast);
    }
    myObject = {
        "name": name,
        "year": year,
        "cast": cast
    };
    json = JSON.stringify(myObject);
}
function randomizeCast(tvSerie) {
    checkRandom[0]=tvSerie[0];
    castRandom=tvSerie.sort(()=> Math.random() - 0.5);
    while (checkRandom[0]===castRandom[0]) {
        castRandom=tvSerie.sort(()=> Math.random() - 0.5);
    }
    return castRandom;
}
function askTVSerie2() {
    console.log("now, we will make an another serie with this cast : "+myObject.cast);
    name = readlineSync.question("The name of this serie ?");
    year = readlineSync.question("In witch year does it product ?");
    cast = myObject.cast;

    myObject2 = {
        "name": name,
        "year": year,
        "cast": cast
    };
    json2 = JSON.stringify(myObject2);
}
askTVSerie();
randomizeCast(myObject.cast);
askTVSerie2();
console.log(json);
console.log(json2);