// cкорочення
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const nextQuestionButton = document.getElementById("next-question");
const previousQuestionButton = document.getElementById("prevoius-question");
const currentQuestion = document.getElementById("current-question-number");
const question = document.getElementById("question-itself");
const submitButton = document.getElementById("submit-button");
const goto = document.getElementById("goto");

// стани
var answerClicked = "";

// масиви
var correctAnswers = new Array("Христофор Колумб",);
var questions = new Array("Хто відкрив Америку?", "wsws");
var answer1variants = new Array("Марко Поло", "jgfds");
var answer2variants = new Array("Васко да Гама", "dfejk");
var answer3variants = new Array("Фернан Магеллан", " rghjkl;lku tgfghjk");
var answer4variants = new Array("Христофор Колумб", "poil;kj");

function adder(){
    index = Number(currentQuestion.innerHTML) -1; 
    question.innerHTML = questions[index];
    answer1.innerHTML = answer1variants[index];
    answer2.innerHTML = answer2variants[index];
    answer3.innerHTML = answer3variants[index];
    answer4.innerHTML = answer4variants[index];
}

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

nextQuestionButton.onclick = function () {
  if (currentQuestion.innerHTML < 20) {
    currentQuestion.innerHTML = Number(currentQuestion.innerHTML) + 1;
    adder()
  }
};

previousQuestionButton.onclick = function () {
    if (currentQuestion.innerHTML >1 ) {
      currentQuestion.innerHTML = Number(currentQuestion.innerHTML) - 1;
      adder()
    }
  };

submitButton.onclick = function () {
  var currentQuestionEntered = goto.value;
  currentQuestionEntered = Math.ceil(currentQuestionEntered);
  if (currentQuestionEntered <= 20 && currentQuestionEntered > 0) {
    currentQuestion.innerHTML = currentQuestionEntered;
    adder()
  } else {
    console.log("You pidaras");
  }
  goto.value = "";
};
