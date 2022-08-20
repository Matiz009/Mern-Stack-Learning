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

const {
    name,
    age,
    projects: { diceGame },
} = student;

console.log(`${name} is ${age} years old and he make ${diceGame}.`);
console.log(diceGame);