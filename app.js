var pElOne = document.getElementById("p1");
var pElTwo = document.getElementById("p2");
var pElThree = document.getElementById("p3");
var counter = 0;

//var userName = prompt("Hey, what's your name?");

var els = [pElOne, pElTwo, pElThree];
var questions = [
 "Do you think my name is Nurbek or Sally?",
 "Do you think I am from Kyrgyzstan or Texas?",
 "Is tennis my favorite hobby?"
];
var answers = [
 "Nurbek",
 "Kyrgyzstan",
 "Tennis"
];

var name =  "nurbek"
var age = "34";
var textAge = "thirty four"
var city = "seattle";

var answerName = prompt ('What is my name?');
if (answerName.toLowerCase() === name) {
alert ('Great, you guessed it right');
  console.log ('User passed the test');
}  else {
  alert ('Sorry, you guessed wrong');
console.log ('User failed the test');
}

var answerAge = prompt ('What is my age?');
if (age === answerAge || answerAge.toLowerCase() === textAge){
  alert ('Great, you guessed it right');
  console.log('His or her\'s age match to this kind of work');
} else {
  alert ('Sorry, you guessed wrong');
  console.log('His or her\'s age DOES NOT match to this kind of work');
}

var answerCity = prompt ('What is my city?')
if (answerCity.toLowerCase() === city) {
  alert ('Great, you guessed it right');
  console.log('User passed the test');
} else {
  alert ('Sorry, you guessed wrong')
  console.log ('User failed the test');
}

function game(question, answer, element) {
  var userInput = prompt(question);
  if (userInput === answer) {
    pElOne.innerHTML = questions[0];
    // Target element and update textContent;
  } else {
    // Do some other codes;
    // Target element and update textContent;
  }
}
for (i = 0; i < question.length; i++){  //WHICH ARRAY GOES HERE???
  game(question[i], answer[i], element[i]);
}
