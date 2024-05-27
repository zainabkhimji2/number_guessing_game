#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
let answer = await inquirer.prompt([{
        name: "guessNumber",
        type: "number",
        message: "Please guess a number between 1 till 6"
    }]);
if (answer.guessNumber === randomNumber) {
    console.log("Congratulation! You Guessed A Right Number");
}
else {
    console.log("You Loss ! try again");
}
