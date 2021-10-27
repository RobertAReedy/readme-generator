// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    { //0
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
    {//1
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
    {//2
        type: "confirm",
        name: "confirmTableOfContents",
        message: "Would you like to add a table of contents?",
    },
    {//3
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
    {//4
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
    {//5
        type: "list",
        name: "license",
        message: "Please choose a license for your project.",
        choices: ["MIT", "GNU", "Apache 2.0", "No License"]
    },
    {//6
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
    {//7
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
    {//8
        type: "confirm",
        name: "addCredit",
        message: "Would you like to add a contributor to the credit list?",
    },
];

async function getInput() { //currently overwrites contributors instead of adding more creditUser creditGithub addCredit
    let retVal;
    let moreContributors = true;
    let contributorData = [];

    retVal = await inquirer.prompt(questions.slice(0, 9));
    moreContributors = retVal.addCredit;

    while (moreContributors) {
        let newContributor = await inquirer.prompt(questions.slice(6, 9));
        retVal.creditUser += " -!- " + newContributor.creditUser;
        retVal.creditGithub += " -!- " + newContributor.creditGithub;
        moreContributors = newContributor.addCredit;
    }

    return retVal;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    getInput()
    .then(input => {
        (generate(input));
    });
    
}

// Function call to initialize app
init();
