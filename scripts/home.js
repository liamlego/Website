let projButton = document.querySelector(".projButton");
let aboutButton = document.querySelector(".aboutButton");

let cnv = document.getElementById("canvas1");

let navBar = document.querySelector("nav");
let head = document.querySelector("header");

let pic = document.getElementById("myPic");

var sticky = navBar.offsetTop;

window.onload = function() {

    
    cnv.style.width = "100%";
    cnv.style.height = "100%";

    cnv.style.left = "100%";

};


window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
}


pic.addEventListener("pointerover", function() {
    pic.style.opacity = "90%";
});

pic.addEventListener("pointerleave", function() {
    pic.style.opacity = "50%";
});

// PROJECT Button

projButton.addEventListener("click", function() {
    projButton.style.backgroundColor = "lime";
    window.location.href = "../html/projects.html";

});

projButton.addEventListener("pointerover", function() {
    projButton.style.backgroundColor = "rgb(0,0,0)";
    projButton.style.color = "rgb(255,255,255)";
});

projButton.addEventListener("pointerleave", function() {

    projButton.style.backgroundColor = "chocolate";
    projButton.style.color = "#0e172d";

});

// ABOUT Button

aboutButton.addEventListener("click", function() {
    aboutButton.style.backgroundColor = "lime";
    window.location.href = "#about";
});

aboutButton.addEventListener("pointerover", function() {

    aboutButton.style.backgroundColor = "rgb(0,0,0)";
    aboutButton.style.color = "rgb(255,255,255)";

});

aboutButton.addEventListener("pointerleave", function() {

    aboutButton.style.backgroundColor = "chocolate";
    aboutButton.style.color = "#0e172d";

});

let about1 = document.getElementById("aboutStatement1");
let about2 = document.getElementById("aboutStatement2");
let about3 = document.getElementById("aboutStatement3");
let about4 = document.getElementById("aboutStatement4");


function apply(aboutthing, text) {
    aboutthing.addEventListener('pointerover', () => {
        aboutthing.innerHTML = text;
        
    });
    aboutthing.addEventListener('pointerleave', () => {
            aboutthing.innerHTML = "";
    });
}

apply(about1, "Hi, I'm Liam Morrison, a Software Engineering student");
apply(about2, "<a id='uwbLink' href='https://www.uwb.edu/'>I currently attend the University of Washington, Bothell</a>.");
apply(about3, "My Technical skills include knowledge in C++, Java, Python, C#, Javascript, HTML, CSS, and Linux. I hope to add to that skillset whenever I can. ")
apply(about4, "In my spare time I like to work on personal programmig projects, play games,do sports, and hang out with friends.");