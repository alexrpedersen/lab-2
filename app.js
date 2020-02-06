'use strict';

var userName = prompt('Welcome! What is your name?');
alert('Welcome ' + userName);

//question 1
var question1 = prompt('Is my name Alex?');
//console.log(question1.toLowerCase() === 'y' ||question1.toLowerCase() === 'yes')
if (question1.toLowerCase() === 'y' ||question1.toLowerCase() === 'yes') {
  alert('Correct!'); }
else {
  alert('Incorrect! Try again.'); }

//question 2
var question2 = prompt('Did I grow up in North Carolina?');
//console.log(question1.toLowerCase() === 'y' ||question1.toLowerCase() === 'yes')
if (question2.toLowerCase() === 'y' ||question2.toLowerCase() === 'yes') {
  alert('Correct!'); }
else {
  alert('Incorrect! Try again.'); }

//question 3
var question3 = prompt('Is my favorite color red?');
//console.log(question1.toLowerCase() === 'y' ||question1.toLowerCase() === 'yes')
if (question3.toLowerCase() === 'n' ||question3.toLowerCase() === 'no') {
  alert('Correct!'); }
else {
  alert('Incorrect! Try again.'); }

//question 4
var question4 = prompt('Is the panthers my favorite football team?');
//console.log(question1.toLowerCase() === 'y' ||question1.toLowerCase() === 'yes')
if (question4.toLowerCase() === 'y' ||question4.toLowerCase() === 'yes') {
  alert('Correct!'); }
else {
  alert('Incorrect! Try again.'); }

//question 5
var question5 = prompt('Do I know how to play the drums?');
//console.log(question1.toLowerCase() === 'y' ||question1.toLowerCase() === 'yes')
if (question5.toLowerCase() === 'n' ||question5.toLowerCase() === 'no') {
  alert('Correct!'); }
else {
  alert('Incorrect! Try again.'); }

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
  var answerq7 = ['metal', 'edm', 'rock'];
  
  for(var i= 0; i < answerq7.length; i++){
  
    var question7 = prompt('What is one of my favorite music genres?');
    switch(question7.toLowerCase()){
      case answerq7[0]:
        alert('Good Job!');
        i = 3
        break;
      case answerq7[1]:
        alert('Good Job!');
        i = 3
        break;
      case answerq7[2]:
        alert('Good Job!');
        i = 3
        break;
      default:
        alert('try again');
    }
  }
  alert('These are my favorite genres: Metal, EDM, Rock');