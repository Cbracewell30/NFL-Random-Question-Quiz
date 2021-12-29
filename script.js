// global variables
var showResponse = document.getElementById('startbtn');
var timerHTML = document.getElementById('timer');
var scoreHTML = document.getElementById('score');
var questionHTML = document.getElementById('quiz-questions');
var button1HTML = document.getElementById('btn-1');
var button2HTML = document.getElementById('btn-2');
var button3HTML = document.getElementById('btn-3');
var button4HTML = document.getElementById('btn-4');
var thiscontainerHTML = document.getElementById("quiz-container")
thiscontainerHTML.style.display = "none";
var removestartHTML = document.getElementById("removestart");
var correctwrongHTML = document.getElementById("correct-wrong");


button1HTML.addEventListener("click", showresult);
button2HTML.addEventListener("click", showresult);
button3HTML.addEventListener("click", showresult);
button4HTML.addEventListener("click", showresult);

var score = 0


// Answer result function
function showresult() {
    var useranswer = this.getAttribute('data-value');
    var results = [];
    if (useranswer == questionBank[questionList].answer) {
        correctwrongHTML.textContent = "Correct"
        score += 5
    }
    else {
        correctwrongHTML.textContent = "Wrong"
        counter -= 5
    };
// Array iteration
    if (questionList < questionBank.length - 1) {
        questionList++
        quizstart()
    }
    else {
        alert('End of Quiz!');
        clearInterval(timeObj);
        endQuiz();
    };

};

// End quiz and highscore function

var endQuiz = function () {
    var name = "";
    // While loop to not allow bank or null names
    while (name === "" || name === null) {
        // ask player their name
        name = window.prompt("What is your name?");
    }

    // CHECK STOREAGE FOR HIGHSCORE//
    var highScore = localStorage.getItem("highScore");
    console.log(localStorage.getItem("highScore"));

    // player beeat highscore//

    if (score > highScore) {
        localStorage.setItem(" highScore", score);
        localStorage.setItem("Name", name);

        alert(name + " now has the high score of " + score + "!");
    }

    else {
        alert(name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }

};

// Question Array
var questionBank = [
    {
        question: "Which team is not an NFL team?",
        choices: ["Chicago Tigers", "Detroit Lions", "Jacksonville Jaguars", "Carolina Panthers"],
        answer: 0
    }, {
        question: "Which player has the most superbowl wins?",
        choices: ["Charles Haley", "Tom Brady", "Joe Montana", "Adam Vinatieri"],
        answer: 1
    }, {
        question: "How long is a football field? ",
        choices: ["100 ft", "300ft", "360ft", "100yrds"],
        answer: 2
    }, {
        question: "How was the temperature of the coldest nfl game?",
        choices: ["32  degrees fahrenheit", "-20 degrees fahrenheit", "-15 degrees fahrenheit", "-9 degrees fahrenheit "],
        answer: 3
    },
]

var questionList = 0
var timeObj;
var counter = 25


// On click function
showResponse.addEventListener("click", function () {
    removestartHTML.style.display = "none";
    thiscontainerHTML.style.display = "block";
    timeObj = setInterval(() => {
        timerHTML.textContent = counter;
        if (counter > 1) {
            counter--
        }
        else {
            alert('Times up!');
            endQuiz();
        }

    }, 1000);

    quizstart();
});

function quizstart() {
    questionHTML.textContent = questionBank[questionList].question
    button1HTML.textContent = questionBank[questionList].choices[0]
    button2HTML.textContent = questionBank[questionList].choices[1]
    button3HTML.textContent = questionBank[questionList].choices[2]
    button4HTML.textContent = questionBank[questionList].choices[3]
}