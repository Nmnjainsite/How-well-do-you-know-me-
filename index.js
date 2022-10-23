var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("May i have your name? ")
console.log("Hey " + userName + "!")
console.log("How well do you know me?")
console.log("*******************")
console.log("INSTRUCTION")
console.log("There are 4 options each and you just have to choose the correct one")
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
  option:" a.guna b.gwalior c.jabalpur d.indore   ",
  answer: 'a',         
},
{
  question: "My college Name?   ",
  option:"a.pg b.gvc c.mits d.hansraj   ",
  answer: "b"
},
{
  question: "what is my age?   ",
  option:"a.20 b.22 c.23 d.28   ",
  answer: "c"
},
{
  question: "I am working at which company?   ",
option:"a. byju's b.asian paints c.infosys d.tcs   ",
  answer: "a"
},
{
  question: "From which Branch i graduated?   ",
 option:" a. civil b.cs c.electrical d.mechanical ",
  answer: "b"
}
];


for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer,currentQuestion.option)
}


console.log("YAY! Your Score ", score)