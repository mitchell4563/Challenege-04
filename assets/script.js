var quizIntro = document.getElementsByClassName("quiz-intro")[0];
var quizContent = document.getElementsByClassName("quiz-content")[0];
var endPage = document.getElementsByClassName("end-page")[0];
var scorePage = document.getElementsByClassName("score-page")[0];
var startButton = document.getElementById("startButton");
var displayScore = document.getElementById("score");
var timerDisplay = document.getElementById("timerDisplay");
var highScoresList = document.getElementById("highscoreul");
var question = document.getElementById("question");
var answerOne = document.getElementById("answer-1");
var answerTwo = document.getElementById("answer-2");
var answerThree = document.getElementById("answer-3");
var answerFour = document.getElementById("answer-4");
var currentQuestion = 0;
var timerCountdown = 10;
var score = 0;
var questions = [
  {
    question: "Which is a commonly used data type?",
    answers: ["bad data", "numbers", "good data", "meh data"],
    correctAnswer: 1,
  },
  {
    question: "How would I call a function titled mainQuiz?",
    answers: ["mainquizcall", "callmainquiz", "Mainquiz", "mainQuiz()"],
    correctAnswer: 3,
  },
  {
    question: "How do i set a variable in javascript>",
    answers: ["Constable = ", "var = ", "letter = ", "variant = "],
    correctAnswer: 1,
  },
  {
    question: "What is the extension for Javascript files?",
    answers: [".java", ".js", ".javaext", ".javajuice"],
    correctAnswer: 1,
  },
  {
    question: "Are javascript and java the same thing?",
    answers: ["yes", "kind of", "no", "of course!"],
    correctAnswer: 2,
  },
];

startButton.addEventListener("click", mainQuiz);

function mainQuiz() {
  quizIntro.style.display = "none";
  quizContent.style.display = "block";
  timerDisplay.innerHTML = timerCountdown;
  var interval = setInterval(() => {
    timerCountdown -= 1;
    timerDisplay.innerHTML = timerCountdown;
    if (timerCountdown < 1) {
      clearInterval(interval);
    } 
    if (timerCountdown === 0) {
      endQuiz()
  }
    if (currentQuestion > 4) {
      clearInterval(interval);
    }
  }, 1000);
  goToQuestion();
}

function chooseAnswer() {
  var selectedAnswer = event.target.value;
  var answerValue = parseInt(selectedAnswer);

  if (answerValue === questions[currentQuestion].correctAnswer) {
    increaseScore();
  } else {
    timerCountdown -= 1;
  }

  currentQuestion++;
  if (currentQuestion > 4) {
    endQuiz();
    return;
  }

  goToQuestion();
}

function goToQuestion() {
  question.innerHTML = questions[currentQuestion].question;
  answerOne.innerHTML = questions[currentQuestion].answers[0];
  answerTwo.innerHTML = questions[currentQuestion].answers[1];
  answerThree.innerHTML = questions[currentQuestion].answers[2];
  answerFour.innerHTML = questions[currentQuestion].answers[3];
  answerOne.addEventListener("click", chooseAnswer);
  answerTwo.addEventListener("click", chooseAnswer);
  answerThree.addEventListener("click", chooseAnswer);
  answerFour.addEventListener("click", chooseAnswer);
}
function endQuiz() {
  quizContent.style.display = "none";
  endPage.style.display = "block";

  $("#submit-button").click(function () {
    endPage.style.display = "none";
    scorePage.style.display = "block";
    var userInfo = [{ 
      initials: document.getElementById("initials-input").value,
      score: score,
    }];
    localStorage.setItem("userInitials", (userInfo[0].initials));
    localStorage.setItem("userScore", (userInfo[0].score));
    highScoresList.appendChild(createListItem(localStorage.getItem("userInitials") + " - " + (localStorage.getItem("userScore"))));
  })
}

function increaseScore() {
  score++;
  displayScore.innerHTML = score;
}

function createListItem(Highscore) {
  var li = document.createElement("li");
  li.textContent = Highscore;
  return li;
}
