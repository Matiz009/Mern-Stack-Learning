let word1 = "Mati";
let word2 = "ul Rehman";

let num1 = 10;

const fullName = `${word1} ${word2}`;
console.log(fullName);

/*
const para = document.getElementById("para");
para.innerHTML = `${fullName}`;

    **** Challenge ****
    
    For this challenge destructure the following object.
*/

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript",
    },
};
//Destructuring objects
const {
    name,
    age,
    projects: { diceGame },
} = student;

console.log(`${name} is ${age} years old and he love to play ${diceGame}`);

//Destructuring arrays

let [name1, name2, name3] = ["ali", "hamza", "muneeb"];
console.log(name1);
// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris" },
    { name: "Kate", city: "Sidney" },
];

for (const student of students) {
    console.log(student.name + "lives in " + student.city);
}

/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];
const shoppingBasket = ["Grapes", ...shoppingList, "Banana", "Mangoes"]; //using spread operator
console.log(shoppingBasket);

//now using rest operator

function makeSum(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    console.log(`Sum of numbers is ${sum}`);
}

makeSum(2, 3, 4, 5, 6);

//arrow function

const printSomething = (type, food) =>
    `I am going to eat ${type} ${food} for dinner`;
console.log(printSomething("ande wala", "burger"));

/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you don't pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/
//default parameters
const foodies = (type = "something") =>
    `I am going to buy ${type} from the grocery shop`;

console.log(foodies("milk"));

/*
 ** includes() Challenge
 * You want to make a chocolate cake
 * And you have a list of ingredients represented with an array
 * Using the JavaScript includes() function
 * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
 * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
 */

const listIngredients = ["flour", "sugar", "eggs", "butter"];

if (listIngredients.includes("chocolate")) {
    console.log("we are going to make a chocolate cake");
} else {
    console.log("we are not going to make a chocolate cake");
}

import { doSum } from "./data";
const a = Math.floor(Math.random() * 10) + 1;
const b = Math.floor(Math.random() * 10) + 1;
let result = doSum(a, b);