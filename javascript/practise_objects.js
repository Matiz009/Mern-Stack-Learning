// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

person = {
    name: "Mati ul Rehman",
    age: 22,
    country: "Pakistan",
};

function logData() {
    console.log(
        person.name +
        " is " +
        person.age +
        " years old " +
        "and lives in " +
        person.country
    );
}

logData();

//Conditional Statements

let age = Math.floor(Math.random() * 80) + 1;
console.log(age);
if (age < 6) {
    console.log("free");
} else if (age >= 6 && age <= 17) {
    console.log("Child Discount");
} else if (age >= 18 && age <= 26) {
    console.log("Student Discount");
} else if (age >= 27 && age <= 66) {
    console.log("full price");
} else if (age > 66) {
    console.log("senior citizen discount");
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indonesia
- Pakistan
*/

for (let i = 0; i < largeCountries.length; i++) {
    console.log(largeCountries[i]);
}

largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop(); //remove the last element
largeCountries.shift(); //remove the first element
largeCountries.push("Pakistan"); //add the last element
largeCountries.unshift("China"); //add the first element

console.log("After some modifications");
for (let i = 0; i < largeCountries.length; i++) {
    console.log(largeCountries[i]);
}

let dayOfMonth = 13;
let weekday = "Friday";

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱");
}

let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function getRandom() {
    let random = Math.floor(Math.random() * 3) + 0;
    console.log(hands[random]);
}
getRandom();