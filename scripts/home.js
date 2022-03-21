let projButton = document.querySelector(".projButton");
let aboutButton = document.querySelector(".aboutButton");


projButton.addEventListener("click", function() {
    alert("You are being sent to projects!");
    window.location.href = "../html/projects.html";

});

aboutButton.addEventListener("click", function() {
    window.location.href = "../html/about.html";
});

//