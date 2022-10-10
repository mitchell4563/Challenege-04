var quizIntro = document.getElementsByClassName("quiz-intro")[0];
var quizContent = document.getElementsByClassName("quiz-content")[0];
var startButton = document.getElementById("startButton");
var question = document.getElementById("question");
var answerOne = document.getElementById("answer-1");
var answerTwo = document.getElementById("answer-2");
var answerThree = document.getElementById("answer-3");
var answerFour = document.getElementById("answer-4");
var currentQuestion = 0;
startButton.addEventListener("click", mainQuiz);

var questions = [{
    question: "what color is the sky?",
    answers: ["blue", "red", "purple", "green"],
    correctAnswer: 0    
}
,{
    question: "what color is the ground?",
    answers: ["blue", "red", "purple", "green"],
    correctAnswer: 3
}
,{
    question: "what color is the ocean?",
    answers: ["red", "blue", "purple", "green"],
    correctAnswer: 1
}
,{
    question: "what color is my truck?",
    answers: ["red", "silver", "orange", "blue"],
    correctAnswer: 1
}
,{
    question: "what color is the street?",
    answers: ["blue", "orange", "black", "yellow"],
    correctAnswer: 2
}]

function mainQuiz () {
    quizIntro.style.display = "none"
    quizContent.style.display = "block"
    goToQuestion()
}

function chooseAnswer () {
   currentQuestion++
   if (currentQuestion > 5) {
    endQuiz()
    return
    }
   goToQuestion()
}

function goToQuestion() {
    question.innerHTML = questions[currentQuestion].question
    answerOne.innerHTML = questions[currentQuestion].answers[0]
    answerTwo.innerHTML = questions[currentQuestion].answers[1]
    answerThree.innerHTML = questions[currentQuestion].answers[2]
    answerFour.innerHTML = questions[currentQuestion].answers[3]
    answerOne.addEventListener("click", chooseAnswer);
    answerTwo.addEventListener("click", chooseAnswer);
    answerThree.addEventListener("click", chooseAnswer);
    answerFour.addEventListener("click", chooseAnswer);
}
function endQuiz() {
    console.log("is is working")
}