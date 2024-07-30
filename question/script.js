const question1Answer = "Христофор Колумб";
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

var answerClicked = "";
const correctAnswer = answer4.innerHTML;

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
  if (answerClicked === correctAnswer) {
    console.log("You are correct!");
  } else {
    console.log("Nop");
  }
}

const nextQuestionButton = document.getElementById("next-question")
const currentQuestion = document.getElementById("current-question-number")

nextQuestionButton.onclick = function(){
    if (currentQuestion.innerHTML<20){
    currentQuestion.innerHTML = (Number(currentQuestion.innerHTML) +1);
    }
    else{
        console.log("No questions left!")
    }
}

const submitButton = document.getElementById("submit-button");
const goto = document.getElementById("goto")

submitButton.onclick = function(){
    var currentQuestionEntered = goto.value;
    currentQuestionEntered = Math.ceil(currentQuestionEntered);
    if (currentQuestionEntered <= 20 && currentQuestionEntered>0){    
    currentQuestion.innerHTML = currentQuestionEntered;
    }
    else{
        console.log('You pidaras');
    }
    goto.value = ""
}