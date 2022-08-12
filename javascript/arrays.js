let name = "Mati";
let age = "22";
let likePizza = true;
let hobby = "coding";
let pet = "dog";
let car = "BMW";
let intro = [name, age, likePizza, hobby, pet, car];
for (let i = 0; i < intro.length; i++) {
    console.log(intro[i]);
}
intro.push("reading");
for (let i = 0; i < intro.length; i++) {
    console.log(intro[i]);
}
let sentence = ["Hello ", "my ", "name ", "is ", "Mati ul Rehman"]; //array of strings
let para = document.getElementById("array");
for (let i = 0; i < sentence.length; i++) {
    para.textContent += sentence[i];
}