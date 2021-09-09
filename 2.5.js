const readlineSync = require("readline-sync");
let favoriteNum = Number (readlineSync.question("What's your favorite number ?"));
while (favoriteNum!=42)
{
    favoriteNum = Number (readlineSync.question("Are you sure ?"));
}