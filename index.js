#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
console.log("\n\t wellcome to codewithmaaz - todo-list application \n\t");
while (conditions) {
    let addtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your task"
        }
    ]);
    todoList.push(addtask.task);
    console.log(`${addtask.task} task added successfully`);
    let addMoretasks = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more tasks",
            default: "false"
        }
    ]);
    conditions = addMoretasks.addMore;
}
console.log("our updated  todo-list", todoList);
