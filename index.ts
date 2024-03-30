#! /usr/bin/env node

import inquirer from "inquirer"

let randomNum = Math.floor(Math.random()*10);
console.log(randomNum);
let userAnswer = await inquirer.prompt([
    {message : "Guess  any  number" , name: "userValue",type: "number" }
]) 
if (userAnswer.userValue === randomNum) {
  console.log("Congratulation! you won the game");
} else {
    console.log("You guess the wrong number");
}