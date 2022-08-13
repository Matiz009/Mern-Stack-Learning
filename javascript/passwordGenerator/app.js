const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

let btn = document.getElementById("btn");
let pass = document.getElementById("pass");
let a = Math.floor(Math.random() * 72) + 1;
let b = Math.floor(Math.random() * 72) + 1;
let c = Math.floor(Math.random() * 72) + 1;
let d = Math.floor(Math.random() * 72) + 1;
let e = Math.floor(Math.random() * 72) + 1;
let f = Math.floor(Math.random() * 72) + 1;
let g = Math.floor(Math.random() * 72) + 1;
let h = Math.floor(Math.random() * 72) + 1;
let i = Math.floor(Math.random() * 72) + 1;
let j = Math.floor(Math.random() * 72) + 1;

btn.addEventListener("click", function() {
    for (let i = 0; i < 10; i++) {
        pass.textContent = "Suggested Password: " +
            characters[a] +
            characters[b] +
            characters[c] +
            characters[d] +
            characters[e] +
            characters[f] +
            characters[g] +
            characters[h] +
            characters[i] +
            characters[j]
    };
});