let candyButton = document.getElementById("candyButton");
let candy = document.getElementById("candy")
let tex = document.getElementById("tex")
let ding = new Audio('resources/ding.mp3');



let pushed = 0;
let held = false
let size = 20
tex.textContent = `this is a ${size} pixel candy ->`
candyButton.textContent = `Hold me to grow the candy`
// Function to grow the candy
function growCandy() {
    if (pushing) {
        size += 1;
        candy.style.fontSize = `${size}px`;
        tex.textContent = `this is a ${size} pixel candy ->`
        candyButton.textContent = `Hold me to grow the candy`
        if (size>=1300) {
            candyButton.textContent = `Did you know you can input the Konami code to reset candy size?`
        }

        requestAnimationFrame(growCandy);
    }
}

function resetSize() {
    size = 20
    candy.style.fontSize = `${size}px`;
    tex.textContent = `this is a ${size} pixel candy ->`
    candyButton.textContent = `Hold me to grow the candy`
}


candyButton.addEventListener("mousedown", function() {
    pushing = true; 
    growCandy();
});

candyButton.addEventListener("mouseup", function() {
    pushing = false;  
});

candyButton.addEventListener("mouseleave", function() {
    pushing = false;  
});



//konami code
let step = 1
document.addEventListener("keyup", function(event) {
    console.log("Key up:", event.key); 
    if (event.key === "ArrowUp") {
        if (step == 1) {
            step = 2
        } else if (step == 2) {
            step = 3
        } else {
            step = 1
        }
    } else if (event.key === "ArrowDown") {
        if (step == 3) {
            step = 4
        } else if (step == 4) {
            step = 5
        } else {
            step = 1
        }
    } else if (event.key === "ArrowLeft") {
        if (step == 5) {
            step = 6
        } else if (step == 7) {
            step = 8
        } else {
            step = 1
        }
    } else if (event.key === "ArrowRight") {
        if (step == 6) {
            step = 7
        } else if (step == 8) {
            step = 9
        } else {
            step = 1
        }
    } else if (event.key === "b") {
        if (step == 9) {
            step = 10
        } else {
            step = 1
        }
    } else if (event.key === "a") {
        if (step == 10) {
            step = 1
            ding.play();
            resetSize()
        } else {
            step = 1
        }
    }
});

