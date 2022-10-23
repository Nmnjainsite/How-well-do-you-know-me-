var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("May i have your name? ")
console.log("Hey " + userName + "!")
console.log("How well do you know me?")
console.log("*******************")
console.log("INSTRUCTION")
console.log("All answers in small letter and only in chars")
console.log("for every right answer you get +1 and else you get -1")
console.log("*******************")
  
function play(question, answer,option) {

  console.log(question)
  var userAnswer = readlineSync.question(option);
  if (userAnswer === answer) {
    console.log("right")
    score = score + 1
  } else {
    console.log("wrong")
  }
  console.log("score is; ", score)

}

var questions = [{
  question: "Where do i live?  ",
  option:" 1.guna 2.gwalior 3.jabalpur 4.indore",
  answer: 'guna',         
},
{
  question: "My college Name? ",
  option:"1.pg 2.gvc 3.mits 4.hansraj   ",
  answer: "gvc"
},
{
  question: "what is my age?",
  option:"1.20 2.22 3.23 4.28   ",
  answer: "23"
},
{
  question: "I am working at which company?",
option:"1. byju's 2.asian paints 3.infosys 4.tcs   ",
  answer: "byju's"
},
{
  question: "From which Branch i graduated?  ",
 option:" 1. civil 2.cs 3.electrical 4.mechanical ",
  answer: "cs"
}
];


for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer,currentQuestion.option)
}


console.log("YAY! Your Score ", score)