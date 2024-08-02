// cкорочення]
console.log("s")
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
const menu = document.getElementById("menu");
const timeSecs = document.getElementById("secs");
const timeMins = document.getElementById("mins");

// стани
var answerClicked = "";
var index = "";

// масиви
var questions = new Array(
  "Хто відкрив Америку?",
  "Яка найбільша планета в нашій Сонячній системі?",
  "Яка валюта використовується в Японії?",
  "Яка найбільша пустеля у світі?",
  'Хто написав п\'єсу "Гамлет"?',
  "Яка країна виготовила перший автомобіль?",
  "Який метал має символ Au?",
  "Яка найбільша ріка у Європі?",
  'Хто намалював "Мону Лізу"?',
  "Який орган відповідає за циркуляцію крові в тілі?",
  'Хто написав "Пригоди Шерлока Холмса"?',
  "Яка валюта використовується у Греції?",
  "Яка країна має найбільше населення?",
  "Який рік є початком ХХ століття?",
  "Яка найпоширеніша мова у світі за кількістю носіїв?",
  'Хто є автором симфонії №9 "Ода до радості"?',
  "Яка найбільша внутрішня водойма на Землі?",
  "Яка планета Сонячної системи має найбільше супутників?",
  "До скількох морів має доступ Україна?",
  "Який метал знаходиться у рідкому стані при кімнатній температурі?"
);
var correctAnswers = new Array(
  "Христофор Колумб",
  "Юпітер",
  "Єна",
  "Антарктична",
  "Вільям Шекспір",
  "Німеччина",
  "Золото",
  "Волга",
  "Леонардо да Вінчі",
  "Серце",
  "Артур Конан Дойл",
  "Євро",
  "Індія",
  "1901",
  "Китайська",
  "Людвіг ван Бетховен",
  "Каспійське море",
  "Юпітер",
  "Два",
  "Ртуть"
);
var answer1variants = new Array(
  "Марко Поло",
  "Сатурн",
  "Єна",
  "Гобі",
  "Вільям Шекспір",
  "Китай",
  "Срібло",
  "Дунай",
  "Вінсент ван Гог",
  "Нирки",
  "Жюль Верн",
  "Грецька драхма",
  "Індія",
  "2000",
  "Англійська",
  "Йоганн Себастьян Бах",
  "Чорне море",
  "Сатурн",
  "Одне",
  "Ртуть"
);
var answer2variants = new Array(
  "Васко да Гама",
  "Нептун",
  "Вона",
  "Сахара",
  "Джордж Орвелл",
  "США",
  "Залізо",
  "Волга",
  "Пабло Пікассо",
  "Серце",
  "Марк Твен",
  "Євро",
  "Китай",
  "2001",
  "Французька",
  "Людвіг ван Бетховен",
  "Тихий океан",
  "Земля",
  "Два",
  "Галій"
);
var answer3variants = new Array(
  "Фернан Магеллан",
  "Юпітер",
  "Юань",
  "Калахарі",
  "Чарльз Діккенс",
  "СРСР",
  "Золото",
  "Дніпро",
  "Клод Моне",
  "Шлунок",
  "Артур Конан Дойл",
  "Грецький долар",
  "США",
  "1900",
  "Китайська",
  "Вольфганг Моцарт",
  "Каспійське море",
  "Нептун",
  "Три",
  "Плюмбум"
);
var answer4variants = new Array(
  "Христофор Колумб",
  "Уран",
  "Японський долар",
  "Антарктична",
  "Оскар Уайлд",
  "Німеччина",
  "Платина",
  "Рона",
  "Леонардо да Вінчі",
  "Мозок",
  "Агата Крісті",
  "Ліра",
  "Австралія",
  "1901",
  "Арабська",
  "Антоніо Вівальді",
  "Середземне море",
  "Юпітер",
  "Жодного",
  "Кадмій"
);

function init() {
  setInterval(tick, 1000);
}

function tick() {
  timeSecs.innerHTML = Number(timeSecs.innerHTML) + 1;
  if (Number(timeSecs.innerHTML) >= 60) {
    timeMins.innerHTML = Number(timeMins.innerHTML.slice(0, -1)) + 1 + ":";
    timeSecs.innerHTML = 0;
  }
}

function adder() {
  index = Number(currentQuestion.innerHTML) - 1;
  question.innerHTML = questions[index];
  answer1.innerHTML = answer1variants[index];
  answer2.innerHTML = answer2variants[index];
  answer3.innerHTML = answer3variants[index];
  answer4.innerHTML = answer4variants[index];
}

adder()

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
  if (answerClicked == correctAnswers[index]) {
    if (
      Number(currentQuestion.innerHTML) < 20 &&
      Number(currentQuestion.innerHTML) != 19
    ) {
      console.log("You are correct!");
      currentQuestion.innerHTML++;
      adder();
    } else if (Number(currentQuestion.innerHTML) == 20) {
      console.log("You are correct!");
      adder();
      window.location.href = "ending/end.html";
    }
  } else {
    console.log("Nop");
  }
}

nextQuestionButton.onclick = function () {
  if (currentQuestion.innerHTML < 20) {
    currentQuestion.innerHTML = Number(currentQuestion.innerHTML) + 1;
    adder();
  }
};

previousQuestionButton.onclick = function () {
  if (currentQuestion.innerHTML > 1) {
    currentQuestion.innerHTML = Number(currentQuestion.innerHTML) - 1;
    adder();
  }
};

submitButton.onclick = function () {
  var currentQuestionEntered = goto.value;
  currentQuestionEntered = Math.ceil(currentQuestionEntered);
  if (currentQuestionEntered <= 20 && currentQuestionEntered > 0) {
    currentQuestion.innerHTML = currentQuestionEntered;
    adder();
  } else {
    console.log("You pidaras");
  }
  goto.value = "";
};

