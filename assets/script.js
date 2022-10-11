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
var timerCountdown = 15;
var score = 0;
var questions = [
  {
    question: "what color is the sky?",
    answers: ["red", "blue", "purple", "green"],
    correctAnswer: 1,
  },
  {
    question: "what color is the ground?",
    answers: ["blue", "red", "purple", "green"],
    correctAnswer: 3,
  },
  {
    question: "what color is the ocean?",
    answers: ["red", "blue", "purple", "green"],
    correctAnswer: 1,
  },
  {
    question: "what color is my truck?",
    answers: ["red", "silver", "orange", "blue"],
    correctAnswer: 1,
  },
  {
    question: "what color is the street?",
    answers: ["blue", "orange", "black", "yellow"],
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
    } if (timerCountdown === 0) {
        endQuiz
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
    console.log("hello");
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
    var userInfo = {
      initials: document.getElementById("initials-input").value,
      score: score,
    };
    localStorage.setItem("userInitials", userInfo.initials);
    localStorage.setItem("userScore", userInfo.score)
    highScoresList.appendChild(createListItem(JSON.stringify(localStorage.getItem("userInitials")) + " - " + (localStorage.getItem("userScore"))));
  });
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
