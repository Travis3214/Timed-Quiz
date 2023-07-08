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

//This is the function to render the questions and answer choices onto the page//
function render(questionIndex) {

    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].q;
        var userChoices = questions[questionIndex].a;
        questionsDiv.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

//This is a function to see if the user got the answer correct and responds accordingly//
function compare(event) {
    var element = event.target;
    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == questions[questionIndex].c) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].c;

        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].c;
        }
    }
    //This is to display what number question you are on//
    questionIndex++;
    if (questionIndex >= questions.length) {
        allDone();
        createDiv.textContent = "End of the quiz!" + " " + "You got " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);
}