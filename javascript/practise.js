//this file contains the practice code

let firstName = "Mati ul";
let lastName = "Rehman";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Create a function that logs out "Hi there, Linda!" when called

let name = "Mati";
let greeting = "Hi there";

function greetings() {
    console.log(greeting + ", " + name + "!");
}

greetings();

let myPoints = 3;

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
    myPoints = myPoints + 3;
    return myPoints;
}

function remove1Points() {
    myPoints = myPoints - 1;
    return myPoints;
}

add3Points();
add3Points();
add3Points();
remove1Points();
remove1Points();

// Call the functions to that the line below logs out 10
console.log(myPoints);