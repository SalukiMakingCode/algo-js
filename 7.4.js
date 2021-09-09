const readlineSync = require("readline-sync");
let userChoice=0;
let pizzaFlavor = [] ;
let addPizza="";
let pressEnter="";
let check = 0 ;
function loadMenu (before) {
    console.log("\u001B[2J\u001B[0;0f");
    if (before!=="" && before!==undefined) {
        console.log(before);
        console.log("");
    }
    console.log("Hello! Welcome to the Pizza Flavors Manager.");
    console.log("");
    console.log("Please choose your actions:");
    console.log("");
    console.log("1 - List all the pizza flavors");
    console.log("2 - Add a new pizza flavor");
    console.log("3 - Remove a pizza flavor");
    console.log("4 - Exit this program");
    console.log("");
    console.log("Enter your action's number:");
    console.log("");
    userChoice=Number (readlineSync.question(""));
    switch (userChoice) {
        case 1 :
            check=pizzaFlavor.length;
            if (check===0) {
                console.log("It seems that you don't have any flavor right now :(");
                console.log("");
                pressEnter=readlineSync.question("Press enter to go back to the menu");
                loadMenu();
                break;
            }
            for (let elem of pizzaFlavor) {
                console.log(elem);
            }
            console.log("");
            pressEnter=readlineSync.question("Press enter to go back to the menu");
            loadMenu();
            break;
        case 2 :
            addPizza=readlineSync.question("Witch flavor do you want to add ?");
            pizzaFlavor.push(addPizza);
            console.log("The new flavor "+addPizza+" is now available !");
            console.log("");
            pressEnter=readlineSync.question("Press enter to go back to the menu");
            loadMenu();
            break;
        case 3 :
            i=1;
            check=pizzaFlavor.length;
            if (check===0) {
                console.log("You can't remove flavor when you don't have any !");
                console.log("");
                pressEnter=readlineSync.question("Press enter to go back to the menu");
                loadMenu();
            }
            console.log("Witch flavor do you want to remove ?");
            console.log("");
            for (let elem of pizzaFlavor) {
                console.log(i+ ". "+elem);
                i++;
            }
            console.log("");
            removePizza=Number(readlineSync.question(""));
            removePizza--;
            if (check>removePizza && removePizza>-1) {
                pizzaFlavor.splice(removePizza, 1);
                console.log("");
                console.log("This flavor isn't available anymore");
                console.log("");
            }
            else {
                loadMenu("This Flavor doesn't exist");
                break;
            }
            pressEnter=readlineSync.question("Press enter to go back to the menu");
            loadMenu();
            break;
        case 4 :
            console.log("");
            console.log("Good Bye !!");
            break;
        default : loadMenu("It wasn't a possible choice !!");
    }
}
loadMenu();