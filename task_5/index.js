import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "time",
        message: "Enter Time in format of HH:MM:SS"
    },
    {
        type: 'list',
        name: 'timezone',
        message: 'Slect AM or Pm',
        choices: ['AM', 'PM']
    }
]);
const { time, timezone } = answers;
let usertime = (time.split(':'));
let timeinarray = usertime.map(Number);
console.log(timeinarray);
let zonetime = timezone;
console.log(zonetime);
if (timeinarray[0] === 12 && zonetime === 'PM') {
    console.log(`Milarty Time is 00:${timeinarray[1], timeinarray[2]}`);
}
else if (timeinarray[0] < 12 && zonetime === 'PM') {
    console.log(`Milarty Time is ${timeinarray[0] + 12}:${timeinarray[1]}:${timeinarray[2]}`);
}
else if (timeinarray[0] === 12 && zonetime === 'AM') {
    console.log(`Milarty Time is 12:${timeinarray[1], timeinarray[2]}`);
}
else if (timeinarray[0] < 12 && zonetime === 'AM') {
    console.log(`Milarty Time is ${timeinarray[0]}:${timeinarray[1]}:${timeinarray[2]}`);
}
else {
    console.log("Invalid time");
}
