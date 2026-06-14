let bulb = document.getElementById("bulb");
let onBtn = document.getElementById("onBtn");
let offBtn = document.getElementById("offBtn");

onBtn.addEventListener("click", function () {
    bulb.src = "images/ON BULB.png";
});

offBtn.addEventListener("click", function () {
    bulb.src = "images/OFF BULB.png";
});