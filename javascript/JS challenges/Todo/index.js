let input = document.getElementById("newToDo");
let newTodo = document.getElementById("todos");
let add_btn = document.getElementById("btnAdd");
let delete_btn = document.getElementById("btn_del");
add_btn.addEventListener("click", function() {
    if (input.value == "") {
        alert("Please enter something");
    } else {
        let element = document.createElement("li");
        element.innerHTML += `<li>${input.value}</li>`;
        newTodo.appendChild(element);
        input.value = "";
    }
});
delete_btn.addEventListener("click", function() {
    newTodo.innerHTML = "";
});