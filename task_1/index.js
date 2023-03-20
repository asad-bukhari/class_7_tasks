/**Task 1:
Write a TypeScript program that does the following:
    1. Declare three variables englishMarks, mathsMarks, and scienceMarks.
    2. Use the prompt-sync library to get input from the user for each subject and assign them to respective variables.
    3. Calculate the average marks of the student using the formula: average = (englishMarks + mathsMarks + scienceMarks) / 3.
    4. Display the average marks to the user as output. **/
var prompt1 = require('prompt-sync')();
var englishMarks = Number.parseInt(prompt1('Enter Your English Marks  '));
var mathsMarks = Number.parseInt(prompt1('Enter Your Math Marks   '));
var scienceMarks = Number.parseInt(prompt1('Enter Your Science Marks   '));
var average = (englishMarks + mathsMarks + scienceMarks) / 3;
console.log("Your English Marks is ".concat(englishMarks, ",  Math Marks id ").concat(mathsMarks, ", Science Marks is ").concat(scienceMarks, ", and Your Average Marks is ").concat(average));
