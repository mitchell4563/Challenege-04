var quizIntro = document.getElementsByClassName("quiz-intro")[0]
var quizContent = document.getElementsByClassName("quiz-content")[0]
var startButton = document.getElementById("startButton");
var question = document.getElementById("question")
var answerOne = document.getElementById("answer-1")
var answerTwo = document.getElementById("answer-2")
var answerThree = document.getElementById("answer-3")
var answerFour = document.getElementById("answer-4")
var currentQuestion = 0
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
}]

function mainQuiz () {
    quizIntro.style.display = "none"
    quizContent.style.display = "block"
    goToQuestion()


    // $("button").click(function() {
    //     var button = $(this).val();
    //     alert(button);
    // });
}

function chooseAnswer (answer) {
   currentQuestion++
   goToQuestion()
   console.log(answer.target.value)
   console.log(currentQuestion)
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