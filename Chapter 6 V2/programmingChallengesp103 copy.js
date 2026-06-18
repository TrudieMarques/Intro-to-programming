//1: Awesome Animals

// let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// for (let i = 0; i < animals.length; i++) {
//     animals[i] = "Awesom " + animals[i];
//     }
// console.log(animals);

//===============================================================================

//2: Random String Generator

// let alphabet = "abcdefghijklmnopqrstuvwxyz";

// let randomString = "";

// while (randomString.length < 6) {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    
// }
// console.log(randomString);

// //OR (Luis' version)

// let alphabet = "abcdefghijklmnopqrstuvwxyz";

// let randomString = "";

// let i = 0;

// while (i < 6) {
//     let r = Math.floor(Math.random() * alphabet.length);
//     randomString += alphabet[r];
//     i++;
// }

// console.log(randomString);

//===============================================================================

//3: H4CK3R SP34K

let input = "javascript is awesome";
let output = "";

for (let n = 0; n < input.length; n++) {
    let letter = input[n];
    if (letter === "a") {
        output += "4";
    } else if (letter === "e") {
        output += "3";
    } else if (letter === "i") {
        output += "1";
    } else if (letter === "o") {
        output += "0";
    }  else {
        output += letter;
    }
}
console.log(output);