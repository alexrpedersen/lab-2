'use strict';

var userName = prompt('Welcome! What is your name?');
alert('Welcome ' + userName);

//question 1
var question = prompt('Is my name Alex?');
que();

//question 2
var question = prompt('Did I grow up in North Carolina?');
que();

//question 3
var question = prompt('Is my favorite color purple?');
que();

//question 4
var question = prompt('Is the panthers my favorite football team?');
que();

//question 5
var question = prompt('Do I know how to play the guitar?');
que();

//question 6
var tries;
for(tries = 0; tries < 4; tries++){
  var question6 = prompt('Pick a number between 1-10');

  if(question6 == 4){
    alert('Good Job!');
    break;
  }
  else if(question6 < 4){
    alert('Number is to low');
  }
  else if(question6 > 4){
    alert('Number is to high');
  }
  }
  if(tries > 4);
  alert('The correct answer is 4');
  
  //question7
  var answerq7 = ['metal', 'edm', 'rock', 'country', 'pop', 'punk'];
  
  for(var i= 0; i < answerq7.length; i++){
  
    var question7 = prompt('What is one of my favorite music genres?');
    switch(question7.toLowerCase()){
      case answerq7[0]:
        alert('Good Job!');
        i = 6
        break;
      case answerq7[1]:
        alert('Good Job!');
        i = 6
        break;
      case answerq7[2]:
        alert('Good Job!');
        i = 6
        break;
        case answerq7[3]:
        alert('Good Job!');
        i = 6
        break;
        case answerq7[4]:
        alert('Good Job!');
        i = 6
        break;
        case answerq7[5]:
        alert('Good Job!');
        i = 6
        break;
      default:
        alert('try again');
    }
  }
  alert('These are my favorite genres: Metal, EDM, Rock, Country, Pop, Punk');

  function que(){
    if (question.toLowerCase() === 'y' ||question.toLowerCase() === 'yes') {
  alert('Correct!'); }
else {
  alert('Incorrect! Try again.'); }
  }