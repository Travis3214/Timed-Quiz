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

allScores = JSON.parse(allScores);

if (allScores !==null) {

    for (var i = 0; i < allScores.length; i++) {

        var addLi = document.createElement("li");
        addLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(addLi);
    }
};