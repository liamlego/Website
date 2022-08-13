var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");


let upBtn = document.querySelector("#gameButtonUp");
let downBtn = document.querySelector("#gameButtonDown");
let leftBtn = document.querySelector("#gameButtonLeft");
let rightBtn = document.querySelector("#gameButtonRight");

let width = c.width;
let height = c.height;

let running = true;

let x = 0;
let y = 0;

let left = false;
let right = false;
let up = false;
let down = false;


// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (up) {
        y--;
    }
    

    if (down) {
        y++;
    }

    if (left) {
        x--;
    }

    if (right) {
        x++;
    } 


    if (y >= height) {
        y = 0;
    }

    if (y < 0) {
        y = height;
    }

    if (x < 0) {
        x = width-1;
    }

    if (x >= width) {
        x = 0;
    }

    ctx.moveTo(0, 0);
    ctx.fillStyle = ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
    
    ctx.moveTo(x, y);
    
    ctx.beginPath();
    ctx.fillStyle = ctx.fillStyle = "#00FF00";
    ctx.fillRect(x, y, 20, 5);
    

}

// Animation call
animate();


// Mouse events

upBtn.addEventListener("mousedown", function () {
    upBtn.style.backgroundImage = "url('../resources/game/arrowgo_up.png')";
    up = true;
});

downBtn.addEventListener("mousedown", function () {
    downBtn.style.backgroundImage = "url('../resources/game/arrowgo_down.png')";
    down = true;
});

leftBtn.addEventListener("mousedown", function() {
    leftBtn.style.backgroundImage = "url('../resources/game/arrowgo_left.png')";
    left = true;
    
});

rightBtn.addEventListener("mousedown", function() {
    rightBtn.style.backgroundImage = "url('../resources/game/arrowgo_right.png')";
    right = true;
});

// -------------------------------------------------

upBtn.addEventListener("mouseup", function() {
    upBtn.style.backgroundImage = "url('../resources/game/arrowup.png')";
    up = false;
});

downBtn.addEventListener("mouseup", function() {
    downBtn.style.backgroundImage = "url('../resources/game/arrowdown.png')";
    down = false;
});

leftBtn.addEventListener("mouseup", function() {
    leftBtn.style.backgroundImage = "url('../resources/game/arrowleft.png')";
    left = false;
});

rightBtn.addEventListener("mouseup", function() {
    rightBtn.style.backgroundImage = "url('../resources/game/arrowright.png')";
    right = false;
});