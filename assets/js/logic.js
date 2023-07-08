var questionIndex = 0;
var score = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var secondsLeft = 40;
var holdInterval = 0;
var questionsDiv = document.querySelector("#questionsDiv");
var ulCreate = document.createElement("ul");
var penalty = 10;
var wrapper = document.querySelector("#wrapper");
var createLabel = document.createElement("label");
var createInput = document.createElement("input");


//This starts the timer and displays the questions on screen//
timer.addEventListener("click", function () {

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                over();
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
        over();
        createDiv.textContent = "End of the quiz!" + " " + "You got " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);
}
//This function is to determine your time left and make it your score//
function over() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;
        questionsDiv.appendChild(createP2);
    }

    //This creates a lebel on the page to tell the user to enter their name//
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your name: ";
    questionsDiv.appendChild(createLabel);

    //This creates an input on the page so the user can type their name and save their HighScore//
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "name");
    createInput.textContent = "";
    questionsDiv.appendChild(createInput);

    //This creates a submit button on the page to save the users score//
    
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";
    questionsDiv.appendChild(createSubmit);
}
//This creates an event listener to save name and score to the storage//
var createSubmit = document.createElement("button");
    createSubmit.addEventListener("click", function () {
    var name = createInput.value;
    if (name === null) {
        console.log("No value entered!");

    } else {
        var finalScore = {
            name: name,
            score: timeRemaining
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        window.location.replace("HighScores.html");
    }
});