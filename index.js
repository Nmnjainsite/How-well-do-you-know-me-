var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("May i have your name? ")
console.log("Hello " + userName + "!")
console.log("How well do you know me?")
console.log("*******************")
console.log("INSTRUCTION")
console.log("All answers in small letter and only in chars")
console.log("for every right answer you get +1 and else you get -1")
console.log("*******************")

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right")
    score = score + 1
  } else {
    console.log("wrong")
  }
  console.log("score is; ", score)

}

var questions = [{
  question: "Where do i live? ",
  answer: "guna"
},
{
  question: "My college Name?",
  answer: "gvc"
},
{
  question: "what is my age? ",
  answer: "23"
},
{
  question: "I am working at which company? ",
  answer: "byju's"
},
{
  question: "From which Branch i graduated? ",
  answer: "cs"
}
];


for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}


console.log("YAY! Your Score ", score)