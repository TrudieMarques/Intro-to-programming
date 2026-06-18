// 1: Scorekeeper

let scores = {
    John: 0,
    Peter: 0,
    Sarah: 0,
    Zoe: 0
};

scores.John += 5;
scores.Peter += 2;
scores.Sarah += 7;
scores.Zoe += 4;

console.log(scores);




// 2: Digging into objects and arrays

let myCrazyObject = {
"name": "A ridiculous object",
"some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
"random animal": "Banana Shark"
};

console.log(myCrazyObject["some array"][2].number);