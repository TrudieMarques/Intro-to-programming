// console.log(99 * 123);
// console.log("This is a long string");

// //INCREMENTING AND DECREMENTING

// var highFives = 100;
// console.log(++highFives);
// console.log(++highFives);
// console.log(--highFives);

// var highFives = 0;
// console.log(highFives++);
// console.log(highFives++);
// console.log(highFives++ + highFives);

// ===========================================================

//+= (PLUS EQUALS) AND -= (MINUS EQUALS

// let x = 10;
// x = x + 5;
// x += 5;
// console.log(x);

// let score = 10;
// score += 7;
// score -= 3;
// console.log(score);

// ===========================================================

//STRINGS

// let numberNine = 9;
// let stringNine = "9";
// console.log(numberNine + numberNine);
// console.log(stringNine + stringNine);
// console.log(numberNine + stringNine);

// let greeting = "Hello ";
// let myName = "Nick";
// console.log(greeting + myName);

// let greeting = "Hello ";
// let myName = "Nick";
// let greet = greeting + myName;
// console.log(greet);

// let greeting = "Hello";
// let myName = "Nick";
// console.log(greeting + " " + myName);

//==============================================================

//FINDING THE LENGTH OF A STRING

// console.log("Supercalifragilisticexpialidocious".length);

// let myString = "Supercalifragilisticexpialidocious";
// console.log(myString.length);

// let java = "Java";
// console.log(java.length);
// let script = "Script";
// console.log(script.length);
// let javaScript = java + script;
// console.log(javaScript.length);

//==============================================================

//GETTING SINGLE CHARACTER FROM A STRING


// let myName = "Nick";
// console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName[2]);
// console.log(myName[3]);
// console.log(myName[4]); //undefined because there is no character at index 4
// console.log(myName[myName.length - 1]); //this is a way to get the last character of a string without knowing its length
// console.log(myName[myName.length - 2])

// let codeWord1 = "are";
// let codeWord2 = "tubas";
// let codeWord3 = "unsafe";
// let codeWord4 = "?!";
// console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

//==============================================================

//CUTTING UP STRINGS

// console.log("a string".slice(1, 5));

// let longString = "My long string is long";
// console.log(longString.slice(3, 14));
// console.log(longString.slice(3));

//====================================================================

//CHANGING STRINGS TO ALL CAPITAL OR ALL LOWERCASE LETTERS

// console.log("hELlo THERE, hOW ARE yOu doINg?".toLowerCase());
// console.log("Hello there, how are doing?".toUpperCase());
// let answer = "zzzzzzz".toUpperCase();
// console.log(answer);
// let answer2 = "ZZZZTTT".toLowerCase();
// console.log(answer2);

// let sillyString = "hELlo THERE, hOW ARE yOu doINg?";
// let lowerString = sillyString.toLowerCase();
// let firstCharacter = lowerString[0];
// let firstCharcterUpper = firstCharacter.toUpperCase();
// let restOfString = lowerString.slice(1);
// firstCharacterUpper + restOfString;

// let sillyString = "hELlo THERE, hOW ARE yOu doINg?";
// console.log(sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase());


//========================================================================

//BOOLEANS

// let javascrptIsCool = true;
// javascriptIsCool;

//LOGICAL OPERATORS

//&& (AND)

// let hadShower = true
// let hasBackpack = false;
// console.log(hadShower && hasBackpack)

// hasBackpack = true;
// console.log(hadShower && hasBackpack)

//|| (OR)

// let hasApple = false;
// let hasOrange = true;
// console.log(hasApple || hasOrange);

//! (NOT)

// let isWeekend = true;
// let needToShowerToday = !isWeekend;
// console.log(needToShowerToday);

//COMBINGING LOGICAL OPERATORS

// let isWeekend = false;
// let hadShower = true;
// let hasApple = false;
// let hasOrange = true;
// let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
// console.log(shouldGoToSchool);

// let isWeekend = false;
// let hadShower = true;
// let hasBackpack = true;
// let hasApple = false;
// let hasOrange = true;
// let shouldGoToSchool = !isWeekend && (hadShower && hasBackpack) && (hasApple || hasOrange);
// console.log(shouldGoToSchool);

//COMPARING NUMBERS WITH BOOLEANS

//Greater than

// let height = 60;
// let heightRestriction = 60;
// console.log(height > heightRestriction);

// let height = 60;
// let heightRestriction = 60;
// console.log(height >= heightRestriction);

//Less than

// let height = 60;
// let heightRestriction = 48;
// console.log(height < heightRestriction);

// let height = 48;
// let heightRestriction = 48;
// console.log(height <= heightRestriction);

//Equal to

// let mySecretNumber = 5;
// let chicoGuess = 3;
// console.log("Chico: " + (mySecretNumber === chicoGuess));
// let harpoGuess = 7;
// console.log("Harpo: " + (mySecretNumber === harpoGuess));
// let grouchoGuess = 5;
// console.log("Groucho: " + (mySecretNumber === grouchoGuess));

//Double Equals

// let stringNumber = "5";
// let actualNumber = 5;
// console.log(stringNumber === actualNumber);
// console.log(stringNumber == actualNumber);

//UNDEFINED AND NULL

// let myVariable;
// console.log(myVariable);

// let myNullVariable = null;
// console.log(myNullVariable)

