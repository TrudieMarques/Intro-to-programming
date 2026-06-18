//ARRAYS

// let dinosaur1 = "T-Rex";
// let dinosaur2 = "Velociraptor";
// let dinosaur3 = "Stegosaurus";
// let dinosaur4 = "Triceratops";
// let dinosaur5 = "Brachiosaurus";
// let dinosaur6 = "Pteranodon";
// let dinosaur7 = "Apatosaurus";
// let dinosaur8 = "Diplodocus";
// let dinosaur9 = "Compsognathus";

//CREATING AN ARRAY

// let dinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus"];

//ACCESSING AN ARRAY'S ELEMENTS

// console.log(dinosaurs[0])
// dinosaurs[0] = "Tyrannosaurus Rex";
// console.log(dinosaurs[0])

//SETTING OR CHANGING ELEMENTS IN AN ARRAY

// dinosaurs[33] = "Philosoraptor";
// console.log(dinosaurs);
// dinosaurs[10] = "XXXX";

// let dinosaurs = []
// dinosaurs[0] = "T-Rex";
// dinosaurs[1] = "Velociraptor";
// console.log(dinosaurs);

//MIXING DATA TYPES IN AN ARRAY

// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
// console.log(dinosaursAndNumbers[2]);
// console.log(dinosaursAndNumbers[3]);
// console.log(dinosaursAndNumbers[2][2]);

// WORKING WITH ARRAYS

// Finding the length of an Array

// let mainiacs = ["Yakko", "Wakko", "Dot"];
// console.log(mainiacs.length);
// console.log(mainiacs[0]);
// console.log(mainiacs[1]);
// console.log(mainiacs[2]);
// console.log(mainiacs[mainiacs.length -1]);
// console.log(mainiacs[mainiacs.length -2]);
// console.log(mainiacs[mainiacs.length -3]);

// Adding Elements to an Array

// let animals = [];
// animals.push("Cat");
// animals.push("Dog");
// animals.push("Llama");
// console.log(animals);
// console.log(animals.length)
// animals.unshift("Monkey");
// animals.unshift("Polar Bear");
// console.log(animals);

//Removing Elements From an Array

// let lastAnimal = animals.pop();
// animals.pop();
// console.log(animals);
// animals.unshift(lastAnimal);
// console.log(animals);
// let firstAnimal = animals.shift();
// console.log(firstAnimal);

//Adding Arrays

let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
let scalyAnimals = ["Boa Constrictor", "Godzilla"];
let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals.join(" "));
console.log(furryAnimals.join(" "));
console.log(scalyAnimals.join(" "));

// let featheredAnimals = ["Macaw", "Dodo"];
// let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals)
// console.log(allAnimals)

//Finding the index of an element in an array

// let colours = ["red", "green", "blue"];
// console.log(colours.indexOf("blue"));
// console.log(colours.indexOf("green"));
// console.log(colours[2]);
// console.log(colours.indexOf("purple"));

// let insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
// console.log(insects.indexOf("Bee"));
// console.log(insects.indexOf("Bee", 3));

// Turning an Array into a String

// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// console.log(boringAnimals.join());
// console.log(boringAnimals.join(" - "));
// console.log(boringAnimals.join(" sees "));

// let myNames = ["Nicholas", "Andrew", "Maxwll", "Morgan"];
// console.log("-" + myNames.join("\n-"));

// //USEFUL THINGS TO DO WITH ARRAYS

// //Building the array with Push

// let landmarks = [];
// landmarks.push("My house");
// landmarks.push("Front path");
// landmarks.push("Flickering streetlamp");
// console.log(landmarks);

// let goingBack = landmarks.pop();
// console.log(goingBack);
// let goingBack2 = landmarks.pop();
// console.log(goingBack2);
// landmarks.pop()
// console.log(landmarks)

// //Using Math.random()

// console.log(Math.random())
// console.log(Math.random() * 10)
// console.log(Math.random() * 100)

// //Using Math.floor() to cut off decimal

// console.log(Math.floor(3.7463463))

// console.log(Math.floor(Math.random() *4));

// let randomWords = ["Explosion", "Cave", "Princess", "Pen"];
// let randomIndex = Math.floor(Math.random() *4);
// console.log(randomWords[randomIndex])

// let phrases = [
// "That sounds good",
// "Yes, you should definitely do that",
// "I'm not sure that's a great idea",
// "Maybe not today?",
// "Computer says no."
// ];

// console.log("Should I have another milkshake?");
// console.log(phrases[Math.floor(Math.random() *5)]);

// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smely", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot"< "Stick"< "Monkey", "Rat"];

// let randomBodyPart = randomBodyParts[Math.floor(Math.random() *3)]
// let randomAdjective = randomAdjectives[Math.floor(Math.random() *3)];
// let randomWord = randomWords[Math.floor(Math.random() *5)];

// join all three words into a sentence

// let randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!";
// console.log(randomInsult);

// console.log("Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!");
