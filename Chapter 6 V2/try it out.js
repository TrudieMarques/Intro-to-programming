// Page 96 - If, if else, else

// let name = "Trudie"

// if (name === "Trudie") {
//     console.log("Hello me!");
// }

// let name = "Sannie";


// if (name === "Trudie") {
//     console.log("Hello me!");
// } else if (name === "Dad") {
//     console.log("Hello Dad!");
// } else if (name === "Mom") {
//     console.log("Hello Mom!");
// } else {
//     console.log("Hello stranger!");
// }


// OR 

// let name = prompt("Please enter your name:");

// let dadsName = "Luis";
// let mumsName = "Ann";
// let myName = "Trudie";

// if (name === "Luis2") {
//     alert("Hello me");
// } else if (name === "Ann") {
//     alert("Hello Mom");
// } else if (name === "Luis") {
//     alert("Hello Dad");
// } else {
//     alert("Hello Stranger.")
// }

// OR (This was Luis' way, but not correct in this case)

// let names =  ["Ann", "Luis2", "Luis", "xxxxx", "yyyy"];
// let name = names[Math.floor(Math.random() * names.length)];
// if (name === "Luis") {
//     console.log("Hello me");
// } else (name === "Anne") {
//     console.log("Hello mom");
// } else (name === "Luis2") {
//     console.log("Hello dad");
// }

//Using a prompt

// let name = prompt("Please enter your name:");
// if (name === "Luis2") {
//     alert("Hello me");
// } else if (name === "Anne") {
//     alert("Hello mom");
// } else if (name === "Luis") {
//     alert("Hello dad");
// } else {
//     alert("Hello Stranger.")
// }

// let name = prompt("Please enter your name:");
// if (name === "Luis2") {
//     console.log("Hello me");
// } else if (name === "Anne") {
//     console.log("Hello mom");
// } else if (name === "Luis") {
//     console.log("Hello dad");
// } else {
//     console.log("Hello Stranger.");
// }

//P 102

// for (let x = 3; x < 10000; x = x * 3) {
//     console.log(x);
// }

let x = 3;
while (x < 10000) {
console.log(x);
x = x * 3;
}
