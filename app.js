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