var peopleWhoWantToSeeMadMaxFuryRoad = [
    { 
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4, 
        gender: "female"
    }    
];
//problem #1
function isOldEnough() {
    for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log("Is old enough");
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log("Is not old enough");
        }
    }
}

isOldEnough();
console.log("======")

//problem #2
function isOldEnoughWithName() {
    for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is old enough");
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is not old enough");
        }
    }
}

isOldEnoughWithName();
console.log("======")

//problem #3
function isOldEnoughWithGender() {
    for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, " + "let him in");
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, " + "DON'T let him in");
        }
    }
    for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, " + "let her in");
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, " + "DON'T let her in");
        }
    }
}

isOldEnoughWithGender();
    console.log("=======")

//problem #4
for(var i = 0; i < 101; i++){
    if(i % 2 === 0){
        console.log("Even")
    }
    else if(i % 1 === 0){
        console.log("Odd")
    }
}
