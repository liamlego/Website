

var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");


let width = c.width;
let height = c.height;

ctx.moveTo(0, 0);

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, width, height);

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
    ctx.fillStyle = ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, width, height);
    
    ctx.moveTo(x, y);
    
    ctx.beginPath();
    ctx.fillStyle = ctx.fillStyle = "#00FF00";
    ctx.fillRect(x, y, 10, 3);
    

}





animate();