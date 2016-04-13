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
