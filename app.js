var pElOne = document.getElementById("p1");
var pElTwo = document.getElementById("p2");
var pElThree = document.getElementById("p3");
var pElFour = document.getElementById("p4");
var counter = 0;

//var userName = prompt("Hey, what's your name?");

var els = [pElOne, pElTwo, pElThree, pElFour];
var questions = [
 "Do you think my name is Nurbek or Sally?",
 "Do you think I am from here or Texas?",
 "Is tennis my favorite hobby?",
 "How old is my son?"
];
var answers = [
 "nurbek",
 "here",
 "yes",
 '6'
];

function game(question, answer, element){
  var answerName = prompt(question).toLowerCase();
  if (answerName === answer) {
    element.textContent = 'Great, you guessed it right';
  counter++
      // else if (parseInt(answerName === '6')) {
      // element.textContent = 'Indeed.'
  }  else {
    element.textContent = 'Sorry, you guessed wrong';
  }
}

for (i = 0; i < questions.length; i++){  //WHICH ARRAY GOES HERE???
  game(questions[i], answers[i], els[i]);
}
// var guessAge = parseInt(prompt ("How old do you think my son is?"));
// console.log("user input for guessAge " + guessAge);
// if (guessAge === 3){
//  alert("That's right! You guessed it.");
//  counter++;
// } else if (guessAge > 3) {
//  alert("Too high. He's 3");
// } else {alert("Close, he's 3");
// }
