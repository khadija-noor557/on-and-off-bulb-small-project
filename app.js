let bulb = document.getElementById("bulb");
let onBtn = document.getElementById("onBtn");
let offBtn = document.getElementById("offBtn");

onBtn.addEventListener("click", function () {
    bulb.src = "images/on.avif";
});

offBtn.addEventListener("click", function () {
    bulb.src = "images/bulb off1.avif";
});