const readlineSync = require("readline-sync");
let name = "";
let year = "";
let cast = [];
let askCast="";
let myObject = { };
let json = "";
function askTVSerie() {
    name = readlineSync.question("Your favorite serie ?");
    year = readlineSync.question("In wich year does it product ?");
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
askTVSerie();

console.log(json);

