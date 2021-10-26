// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What would you like to title your project?",
        validate: entry => {
            if (entry) {
                return true;
            }
            else {
                console.log("Please enter a project name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "How would you like to describe your project?",
        validate: entry => {
            if (entry) {
                return true;
            }
            else {
                console.log("Please enter a project description!");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmTableOfContents",
        message: "Would you like to add a table of contents?",
    },
    {
        type: "input",
        name: "installation",
        message: "Please explain how to install your project.",
        validate: entry => {
            if (entry) {
                return true;
            }
            else {
                console.log("Please explain how to install your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please explain how to use your project.",
        validate: entry => {
            if (entry) {
                return true;
            }
            else {
                console.log("Please explain how to use your project.");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for your project.",
        choices: ["MIT", "GNU", "Apache 2.0", "No License"]
    },
    {
        type: "input",
        name: "creditUser",
        message: "Please type the name of the contributor.",
        validate: entry => {
            if (entry) {
                return true;
            }
            else {
                console.log("Please type the name of the contributor.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "creditGithub",
        message: "Please type the github username of the contributor.",
        validate: entry => {
            if (entry) {
                return true;
            }
            else {
                console.log("Please type the github username of the contributor.");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "addCredit",
        message: "Would you like to add a contributor to the credit list?",
    },
];

function getInput() {
    return inquirer.prompt(questions); //questions is an array of objects; nothing more
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    const input = getInput();
    writeToFile("README.md", input);
}

// Function call to initialize app
init();
