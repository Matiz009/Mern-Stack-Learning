let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard + 4;
let hasBlackJack = false;
let isAlive = true;
let message = " ";
// 1. Declare a variable called message and assign its value to an empty string

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
    console.log(message);
} else if (sum === 21) {
    message = "Woo hoo! You've got Blackjack! 🥳";
    console.log(message);
    hasBlackJack = true;
} else {
    message = "You're out of the game! 😭";
    console.log(message);
    isAlive = false;
}

// 3. Log it out!

//arrays

let name = 'Mati ul Rehman';
let age = '22';
let likePizza = true;
let hobbies = ['coding', 'reading', 'playing'];
let pets = ['dog', 'cat', 'fish'];
let cars = ['BMW', 'Audi', 'Mercedes'];
let intro = [name, age, likePizza];
console.log(intro);
intro.push(hobbies);
console.log(intro);
intro.push(pets);
console.log(intro);
intro.push(cars);
console.log(intro);

//loops in js
/*
let start = 10;
let end = 100;
for (let i = start; i <= end; i = i + 10) {
    console.log(i);
}*/

for (let i = 0; i <= intro.length; i++) {
    console.log("values: " + intro[i]);
}