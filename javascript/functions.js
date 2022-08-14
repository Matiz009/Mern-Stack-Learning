//.                parameters
function greetUser(greeting, name) {
    welcomeEl.textContent = `${greeting}, ${name} 👋`;
}

//.        arguments
greetUser("Howdy", "James");

function add(num1, num2) {
    return num1 + num2;
}

add(3, 4);

// Create a function, getFirst(arr), that returns the first item in the array

function getFirst(array = []) {
    console.log(array[0]);
}

let a = [1, 2, 3, 4];
getFirst(a);

// Call it with an array as an argument to verify that it works