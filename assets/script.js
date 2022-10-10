var startButton = document.getElementById("startButton");
startButton.addEventListener("click", runQuiz);

function runQuiz () {
    var quizIntro = document.getElementsByClassName("quiz-intro")[0]
    var quizContent = document.getElementsByClassName("quiz-content")[0]
    quizIntro.style.display = "none"
    quizContent.style.display = "block"
}