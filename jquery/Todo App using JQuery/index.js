$(function() {
    $("#btnAdd").click(add);
    $("#btn_del").click(remove);
});

function add() {
    let input = $("#newToDo").val();
    $("#todos").append("<li>" + input + "</li>");
    $("input").val(" ");
}

function remove() {
    $("#todos").remove();
}