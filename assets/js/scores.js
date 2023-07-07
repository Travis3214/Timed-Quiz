var goBack = document.querySelector("#goBack");
var clear = document.querySelector("#clear");
var highScore = document.querySelector("#highScore");
var allScores = localStorage.getItem("allScores");

goBack.addEventListener("click", function () {
    window.location.replace("index.html")
});

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});