// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

localStorage.setItem("myCredits", "100");
localStorage.setItem("myValues", "458");

let value = localStorage.getItem("myValues");
console.log(value);

let data = [{
        player: "Jane",
        score: 52,
    },
    {
        player: "Mark",
        score: 41,
    },
];

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

let btn = document.getElementById("btn");
let header = document.getElementById("header");
btn.addEventListener("click", function() {
    header.textContent = "Score of " + data[0].player + " is : " + data[0].score;
});

// The generateSentence(desc, arr) takes two parameters: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

function generateSentence(desc, arr = []) {
    const description_1 = "largest countries";
    const description_2 = "best fruits";
    const arr1 = ["China", "India", "USA"];
    const arr2 = ["Apples", "Bananas"];
    if (desc === description_1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr1[i]) {
                console.log(arr1[i]);
            }
        }
    } else if (desc === description_2) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr2[i]) {
                console.log(arr2[i]);
            }
        }
    }
}

generateSentence("largest countries", ["China", "India", "USA"]);
generateSentence("best fruits", ["Apples", "Bananas"]);