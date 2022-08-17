let close_btn = document.getElementById("close-modal");
let open_btn = document.getElementById("open-modal");

let overlay = document.getElementById("overlay");
close_btn.addEventListener("click", function() {
    overlay.style.display = "none";
});

open_btn.addEventListener("click", function() {
    overlay.style.display = "block";
});