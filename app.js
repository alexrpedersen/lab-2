'use strict';

var userName = prompt('Welcome! What is your name?');
alert('Welcome ' + userName);

var allQuestions = [
  ['YesNo', 'Is my name Alex?', 'yes'],
  ['YesNo', 'Did I grow up in North Carolina?', 'yes'],
  ['YesNo', 'Is my favorite color purple?', 'yes'],
  ['YesNo', 'Is the panthers my favorite football team?', 'yes'],
  ['YesNo', 'Do I know how to play the guitar?', 'yes'],
  ['HighLow', 'Pick a number between 1-10', 4],
  ['IsInList', 'What is one of my favorite music genres?', ['metal', 'edm', 'rock', 'country', 'pop', 'punk']]
]

// Loop over all the questions
for(var i= 0; i < allQuestions.length; i++){
  var questionType = allQuestions[i][0];
  var question = allQuestions[i][1];
  var correctAnswer = allQuestions[i][2];

  // Figure out how many attempts you get on the question
  var numberOfTries = 1;
  if(questionType === 'HighLow') {
    numberOfTries = 4;
  }
  else if(questionType === 'IsInList') {
    numberOfTries = 6;
  }

  // Ask question, get response, check if it's right
  var isCorrect = false;
  for(var j=0; j < numberOfTries; j++){
    var response = prompt(question);
    isCorrect = isAnswerCorrect(questionType, response, correctAnswer);
    if(isCorrect){
      break;
    }
  }

  // For IsInList questions, give them them list if they fail to guess
  if(questionType === 'IsInList' && !isCorrect)
  {
    alert('Sorry, correct answers were:' + correctAnswer);
  }
}
alert('Thanks for playing!');

function isYesNoAnswerCorrect(response, correctAnswer){
  var responseFirstLetterLowercase = response.toLowerCase()[0];
  var correctAnswerFirstLetterLowercase = correctAnswer.toLowerCase()[0];
  var isCorrect = responseFirstLetterLowercase === correctAnswerFirstLetterLowercase;
  if(isCorrect) {
    alert('You\'re right!');
    return true;
  }
  else {
    alert('Try again!');
    return false;
  }
}

function isHighLowAnswerCorrect(response, correctAnswer){
  if(response == correctAnswer){
    alert('You are right!');
    return true;
  }
  else if(response < correctAnswer) {
    alert('Number is too low');
    return false;
  }
  else if(response > correctAnswer) {
    alert('Number is too high');
    return false;
  }
}

function isIsInListAnswerCorrect(response, correctAnswer){
  var isInList = false;
  for(var i= 0; i < correctAnswer.length; i++){
    if(response.toLowerCase() === correctAnswer[i])
    {
      isInList = true;  // Mark that you found it in the list
      break; // And quit looking
    }
  }
  if(isInList){
    alert('Correct!');
    return true;
  }
  else {
    alert('Nope, guess again!');
    return false;
  }
}

  function isAnswerCorrect(questionType, response, correctAnswer){
    var isCorrect = false;
    switch(questionType){
      case 'YesNo':
        isCorrect = isYesNoAnswerCorrect(response, correctAnswer);
        break;
      case 'HighLow':
        isCorrect = isHighLowAnswerCorrect(response, correctAnswer);
        break;
      case 'IsInList':
        isCorrect = isIsInListAnswerCorrect(response, correctAnswer);
        break;
    }
    return isCorrect;
  }