// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { listenerCount } = require("process");

// TODO: Create an array of questions for user input
// title of project and discription and table of contents and installations and usage and contributing and tests and questions.
// type:list and type: input
const questions = [
    
  // users github user name
  {
    type: "input",
    name: "github",
    message: "what is your github user?",
  },
  // users email
  {
    type: "input",
    name: "githubEmail",
    message: "what is the users email?",
  },
  // title of the project
  {
    type: "input",
    name: "title",
    message: "name of title of the project?",
  },
  // discription of the project
  {
    type: "input",
    name: "projectDiscription",
    message: "describe the project",
  },
  // choose from license list
  {
    type: "list",
    name: "licenseList",
    message: "choose a license list",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  // installation instructions
  {
    type: "input",
    name: "install",
    message: "what is the command to install the app?",
  },
  // test instructions
  {
    type: "input",
    name: "testInstruction",
    message: "what is the command to run tests on the app?",
  },
  // usage info
  {
    type: "input",
    name: "infoUsage",
    message: "how do you use the app?",
  },
  // contrabution info
  {
    type: "input",
    name: "contrabuterInfo",
    message: "type the name of the contrabuters for this project",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(
      /* Pass your questions in here */
      questions
    )
    .then((answers) => {
        console.log(answers);
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        // Something else went wrong
        console.log("Something else went wrong");
      }
    });
}

// Function call to initialize app
init();
