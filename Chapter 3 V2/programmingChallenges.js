//Programming Challenges

//#1

// let randomBodyParts = ["Eyeball", "Big Toe", "Forehead"];
// let randomAdjectives = ["Huge", "Slow", "Rotting"];
// let randomWords = ["Pencil", "Glasses", "Door", "Paper Towel", "Car"];

// let randomBodyPart = randomBodyParts[Math.floor(Math.random() *randomBodyParts.length)]
// let randomAdjective = randomAdjectives[Math.floor(Math.random() *randomAdjectives.length)];
// let randomWord = randomWords[Math.floor(Math.random() *randomWords.length)];

// let randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!";
// console.log(randomInsult);


//#2

// let randomBodyParts = ["Eyeball", "Big Toe", "Forehead"];
// let randomAdjectives = ["Huge", "Slow", "Rotting"];
// let randomAnimals = ["Dog", "Cat", "Horse", "Llama"]
// let randomAnimalBodyParts = ["Tail", "Hoof", "Tongue", "Ear", "Tooth"];

// let randomBodyPart = randomBodyParts[Math.floor(Math.random() *randomBodyParts.length)]
// let randomAdjective = randomAdjectives[Math.floor(Math.random() *randomAdjectives.length)];
// let randomAnimal = randomAnimals[Math.floor(Math.random() *randomAnimals.length)];
// let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() *randomAnimalBodyParts.length)];

// let randomInsult = "Your " + randomBodyPart + " is more " + randomAdjective + " than a " + randomAnimal + "'s " + randomAnimalBodyPart + "!";
// console.log(randomInsult);


//#3

let randomBodyParts = ["Eyeball", "Big Toe", "Forehead"];
let randomAdjectives = ["Huge", "Slow", "Rotting"];
let randomAnimals = ["Dog", "Cat", "Horse", "Llama"]
let randomAnimalBodyParts = ["Tail", "Hoof", "Tongue", "Ear", "Tooth"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() *randomBodyParts.length)]
let randomAdjective = randomAdjectives[Math.floor(Math.random() *randomAdjectives.length)];
let randomAnimal = randomAnimals[Math.floor(Math.random() *randomAnimals.length)];
let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() *randomAnimalBodyParts.length)];

let randomInsult = ["Your", randomBodyPart, "is more", randomAdjective, "than a", randomAnimal+"'s", randomAnimalBodyPart+"!"].join(" ")
console.log(randomInsult);

//#4

// numbers = [3, 2, 1]
// console.log([numbers[0], numbers[1], numbers[2],].join(" is bigger than "))