var questionIndex = 0;
var score = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var secondsLeft = 90;
var holdInterval = 0;
var questionsDiv = document.querySelector("#questionsDiv");
var ulCreate = document.createElement("ul");
var penalty = 10;
var wrapper = document.querySelector("#wrapper");

//This starts the timer and displays the questions on screen//
timer.addEventListener("click", function () {

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});