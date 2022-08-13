let age = 22; //creating a variable called age and assigning it the value of 22
let name = "John"; //creating a variable called name and assigning it the value of "John"
console.log(`${name} is ${age} years old.`);
let myDogAge = age * 7; //creating a variable called myDogAge and assigning it the value of age times 7
console.log("My Dog age is " + myDogAge + " years old.");

// Mathematical Operators
let bonusPoints = 50;
bonusPoints = bonusPoints + 50;
bonusPoints = bonusPoints - 75;
bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

//functions

function invoke() {
    console.log(42);
}

invoke();

//sum function

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function sum(a, b, c) {
    total = console.log(a + b + c);
    return total;
}

sum(lap1, lap2, lap3);

let lapsCompleted = 0;
incrementLaps(lapsCompleted);

function incrementLaps(total) {
    lapsCompleted = lapsCompleted + 1;
    total = console.log(lapsCompleted);
    return total;
}

incrementLaps(lapsCompleted);
incrementLaps(lapsCompleted);
incrementLaps(lapsCompleted);

let message = "u have messages";
console.log(message);

let greeting = "Hello!";
let concatenatedMessage = greeting + " " + name;
console.log(concatenatedMessage);

//challenge
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let welcome = document.getElementById("welcome-el");
welcomeEl.innerText = greeting + name;


//Logical Operators
let hasCompletedCourse = false;
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate();
}

function generateCertificate() {
    console.log("Generating certificate....");
}
let hasSolvedChallenge = false;
let hasHintsLeft = false;

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

function showSolution() {
    console.log("Showing the solution....");
}

if (hasSolutionChallenge === false && hasHintsLeft === false) {
    showSolution();
}