/*Task 3:
To-Do List using inquirer
Install the inquirer package using npm.
Use the inquirer package to prompt the user to enter a task and add it to a list of tasks.
Display the list of tasks to the user and prompt them to mark a task as completed or delete a task from the list.
Display the updated list of tasks to the user after each operation.*/
import inquirer from "inquirer";
let todolist = [];
let loop = true;
while (loop) {
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "Enter Your Todo?  "
        },
        {
            type: "confirm",
            name: "Addmore",
            message: "Do you want Enter More Todo?  ",
            default: false
        }
    ]);
    const { todo, Addmore } = answers;
    if (todo) {
        todolist.push(todo);
        loop = Addmore;
    }
    else {
        console.log('Enter Valid Data');
    }
}
if (todolist.length > 0) {
    console.log(`your TO DO lsit is [${todolist}]`);
}
else {
    console.log('Record Not Found ');
}
