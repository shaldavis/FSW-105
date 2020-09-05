// preliminaries
if(5 > 3){
    console.log("is greater than")
}

if (("cat".length) === 3) {
    console.log("is the length")
}

if ("cat" === "dog") {
    console.log("is the same")
} else {
    console.log("is not the same")
}

// Bronze Medal
var person = {
    name: "Bobby",
    age: 12
}
if (person.age >= 18) {
    console.log(person.age + " is old enough")
}   else {
    console.log(person.age + " is not old enough")
}

if (person.name. startsWith("B")) {
    console.log(person.name + " can enter (Begins with B)")
}

if (person.age >= 18 && person.name.startsWith("B")) {
    console.log("Can enter the movie")
} else{
    console.log("Can not enter the movie")
}

// Silver Medal
if (1 === 1){
    console.log("Strict")
}   else if (1 == 1){
    console.log("Abstract")
}   else {
    console.log("Not Equal at All")
}

if (1 <= 2 && 2 == 4){
    console.log("Yes")
}   else {
    console.log("No")
}