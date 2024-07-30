const question1Answer = "Христофор Колумб";
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

var answerClicked = "";
var correctAnswers = new Array("Христофор Колумб");
var questions = new Array("Хто відкрив Америку?");
var answer1variants = new Array("Марко Поло");
var answer2variants = new Array("Марко Поло");
var answer3variants = new Array("Марко Поло");
var answer4variants = new Array("Марко Поло");

answer1.onclick = function () {
  answerClicked = answer1.innerHTML;
  checkAnswer();
};

answer2.onclick = function () {
  answerClicked = answer2.innerHTML;
  checkAnswer();
};

answer3.onclick = function () {
  answerClicked = answer3.innerHTML;
  checkAnswer();
};

answer4.onclick = function () {
  answerClicked = answer4.innerHTML;
  checkAnswer();
};

function checkAnswer() {
  if (answerClicked == correctAnswers[0]) {
    console.log("You are correct!");
  } else {
    console.log("Nop");
  }
}

const nextQuestionButton = document.getElementById("next-question");
const currentQuestion = document.getElementById("current-question-number");

nextQuestionButton.onclick = function () {
  if (currentQuestion.innerHTML < 20) {
    currentQuestion.innerHTML = Number(currentQuestion.innerHTML) + 1;
    questionChecker();
  } else {
    console.log("No questions left!");
  }
};

const question = document.getElementById("question-itself");

function questionChecker() {
  switch (Number(currentQuestion.innerHTML)) {
    case 1:
      question.innerHTML = questions[0];
      break;

    case 2:
      question.innerHTML = questions[1];
      break;

    case 3:
      question.innerHTML = questions[2];
      break;

    case 4:
      question.innerHTML = questions[3];
      break;
    case 5:
      break;

    case 6:
      break;

    case 7:
      break;

    case 8:
      break;

    case 9:
      break;

    case 10:
      break;

    case 11:
      break;

    case 12:
      break;

    case 13:
      break;

    case 14:
      break;

    case 15:
      break;

    case 16:
      break;

    case 17:
      break;

    case 18:
      break;

    case 19:
      break;

    case 20:
      question.innerHTML = questions[0];
      break;
  }
}
const submitButton = document.getElementById("submit-button");
const goto = document.getElementById("goto");

submitButton.onclick = function () {
  var currentQuestionEntered = goto.value;
  currentQuestionEntered = Math.ceil(currentQuestionEntered);
  if (currentQuestionEntered <= 20 && currentQuestionEntered > 0) {
    currentQuestion.innerHTML = currentQuestionEntered;
    questionChecker();
  } else {
    console.log("You pidaras");
  }
  goto.value = "";
};
