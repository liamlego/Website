

var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");


let upBtn = document.querySelector("#gameButtonUp");
let downBtn = document.querySelector("#gameButtonDown");
let leftBtn = document.querySelector("#gameButtonLeft");
let rightBtn = document.querySelector("#gameButtonRight");

upBtn.addEventListener("click", function() {
    upBtn.style.backgroundImage = "url('../resources/game/arrowgo_up.png')";

});

downBtn.addEventListener("click", function() {
    

});

leftBtn.addEventListener("click", function() {
    

});

rightBtn.addEventListener("click", function() {
    

});


let width = c.width;
let height = c.height;

let running = true;

let x = 0;
let y = 0;

function animate() {
    requestAnimationFrame(animate);

    if (x < width/2) {
        x++;
    }
    
    if (x >= width/2) {
        y++;
    }

    if (y >= height) {
        x = 0;
        y = 0;
    }

    ctx.moveTo(0, 0);
    ctx.fillStyle = ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
    
    ctx.moveTo(x, y);
    
    ctx.beginPath();
    ctx.fillStyle = ctx.fillStyle = "#00FF00";
    ctx.fillRect(x, y, 10, 5);
    

}





animate();