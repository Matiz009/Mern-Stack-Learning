const credits = 12;

if (credits > 0) {
    console.log("You have enough credits to watch the movie.");
} else {
    console.log("You don't have enough credits to watch the movie.");
}

//falsy values in JavaScript
// false
// 0
// ""
// null
// undefined
// NaN

let currentViewers = ["jane"];

console.log(currentViewers[5]);

console.log(Boolean("")) // false
console.log(Boolean("0")) // true
console.log(Boolean(100)) //true
console.log(Boolean(null)) //false
console.log(Boolean([0])) //true
console.log(Boolean(-0)) //false