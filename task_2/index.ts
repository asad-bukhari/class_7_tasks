/*Task 2: 
Basic Calculator using inquirer
Install the inquirer package using npm.
Use the inquirer package to prompt the user to select an operation (addition, subtraction, multiplication, division) and enter two numbers.
Based on the selected operation, perform the corresponding mathematical operation and display the result to the user as output.
*/

import inquirer from "inquirer";

let answers= inquirer.prompt([{
    name:"firstNumber",
    type: "number",
    message:"Enter First Number  ?  "
},
{
    name:"scondNumber",
type: "number",
message:"Enter Scond  Number  ?  "

},
{
    name:"opration",
    type: "list",
    choices:['+','-', '*', '/'],
    message:"Slect one opration:"
}
])

.then((result)=>{
    if(result.opration==="+"){
        console.log(`${result.firstNumber+result.scondNumber}`);
        
    }else if (result.opration==="-"){
        console.log(`${result.firstNumber-result.scondNumber}`);}
    else if (result.opration==="*"){
         console.log(`${result.firstNumber*result.scondNumber}`);}
     else if (result.opration==="/"){
        console.log(`${result.firstNumber/result.scondNumber}`);}
    
    else{
        console.log('invalid opration');
        
    }
})

