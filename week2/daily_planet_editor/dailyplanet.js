var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];
function Who_Wins(is_There_Kryptonite, enemyName) {
    if (!is_There_Kryptonite) {
        return "Superman beats " + enemyName + " of course";
    }
    else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}
for (var i = 0; i < enemies.length; i++) {
    var is_There_Kryptonite;
        if (i % 2 === 0) {
        is_There_Kryptonite = true;
    } else {
        is_There_Kryptonite = false;
    }
    console.log(Who_Wins(is_There_Kryptonite, enemies[i]));
}
function howAttractedIsLoisLaneToMe() {
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 10) + 1);
}
console.log(howAttractedIsLoisLaneToMe());
var clarkKent = true;
var superman = false;
while (clarkKent) {
    console.log("I'm just a nerdy columnist");
    
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}