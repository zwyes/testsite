let candyButton = document.getElementById("candyButton");
let pushed = 0;






button.addEventListener("click", function() {
    alert("Summoning candy!! Watch out!!");
    pushed += 1;
    candyButton.textContent = "Click me for more candy (" + toString(pushed) + ")";
});