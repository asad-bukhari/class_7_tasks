
/**Task 1: 
Write a TypeScript program that does the following:
    1. Declare three variables englishMarks, mathsMarks, and scienceMarks.
    2. Use the prompt-sync library to get input from the user for each subject and assign them to respective variables.
    3. Calculate the average marks of the student using the formula: average = (englishMarks + mathsMarks + scienceMarks) / 3.
    4. Display the average marks to the user as output. **/


    let prompt1 = require('prompt-sync')();
    


    let englishMarks:number= Number.parseInt(prompt1('Enter Your English Marks  '));
    
    let mathsMarks :number = Number.parseInt(prompt1('Enter Your Math Marks   '));

    let scienceMarks:number  = Number.parseInt(prompt1('Enter Your Science Marks   '));


    let average = (englishMarks + mathsMarks + scienceMarks) / 3


    console.log(`Your English Marks is ${englishMarks},  Math Marks id ${mathsMarks}, Science Marks is ${scienceMarks}, and Your Average Marks is ${average}`);
    



