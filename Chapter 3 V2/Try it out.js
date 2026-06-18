//Page 60


let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smely", "Boring", "Stupid"];
let randomWords = ["Fly", "Marmot"< "Stick"< "Monkey", "Rat"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() *randomBodyParts.length)]
let randomAdjective = randomAdjectives[Math.floor(Math.random() *randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() *randomWords.length)];

let randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!";
console.log(randomInsult);
