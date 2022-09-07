const input_Name = document.getElementById("name");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const header = document.createElement("h2");
    console.log("working");
    if (
        input_Name.value === "Chris" ||
        input_Name.value === "chris" ||
        input_Name.value === "matiz"
    ) {
        header.innerHTML = `Welcome ${input_Name.value} you just won a car`;
    } else {
        header.innerHTML = `Welcome ${input_Name.value}!`;
    }
});