const readlineSync = require("readline-sync");
let nbQuestion = 4;
let firstName = readlineSync.question("What's your First Name ? ("+nbQuestion+" remaining)");
nbQuestion--;
let city = readlineSync.question("What's your favorite city ? ("+nbQuestion+" remaining)");
nbQuestion--;
let monsterType = readlineSync.question("Choose one type of monster (vampire, demon, ...) : ("+nbQuestion+" remaining)");
nbQuestion--;
let monsterName = readlineSync.question("Name the monster : ("+nbQuestion+" remaining)");
nbQuestion--;
let bestFriend = readlineSync.question("What's the First name of your best friend : ("+nbQuestion+" remaining)");


console.log("An early morning, in "+city+", "+firstName+" was awaking with a strange feeling. Did I dream this night or did I really see a "+monsterType+ " ? A few minutes later, "+firstName+" heard a strange noise behind the doors. - 'hé ! how are there ?', said "+firstName+"- 'I'm "+monsterName+" and I come to eat you !' - 'WTF !', said "+firstName+", 'Get out of my house you bitch !'. "+firstName+" get out of the room to see who is the men who want to eat him. BUT, surprise, it's not a men, it's a "+monsterType+". - 'Oh my fucking god, that's was not a dream ... it's a real nightmare' said "+firstName+" before begun to run out his house. When "+firstName+" arrived at the front door, "+bestFriend+" was there with Chuck Norris. - 'don't panic "+firstName+" said "+bestFriend+", I'm here to help you. Chuck attack !! " +
    "One minute later, "+monsterName+" was deadly touch by Chucky ... poor "+monsterName+", he didn't imagine that THE Chuck Norris is a friends of" +
    " "+firstName+ " and " +bestFriend+ ". End of story");

