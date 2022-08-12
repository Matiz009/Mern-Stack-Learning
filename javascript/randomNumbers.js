let player1Time = Math.floor(Math.random() * 100);
let player2Time = Math.floor(Math.random() * 30);

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time;
    } else if (player2Time < player1Time) {
        return player2Time;
    } else {
        return player1Time;
    }
}

totalRaceTime(player1Time, player2Time);

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function totalRaceTime(a, b) {
    let total = a + b;
    console.log(a);
    console.log(b);
    console.log("Total Race Time " + total);
    return total;
}

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

console.log(rollDice());