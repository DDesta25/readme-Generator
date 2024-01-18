// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
// title of project and discription and table of contents and installations and usage and contributing and tests and questions.
const questions = [
    // users github user name
    {
        type: null,name:null,Message:null

    
    },
    // users email
    {
        type: null,name:null,Message:null

    
    },
    // title of the project
    {
        type: null,name:null,Message:null

    
    },
    // discription of the project
    {
        type: null,name:null,Message:null

    
    },
    // choose from license list
    {
        type: null,name:null,Message:null

    
    },
    // installation instructions
    {
        type: null,name:null,Message:null

    
    },
    // test instructions
    {
        type: null,name:null,Message:null

    
    },
    // usage info
    {
        type: null,name:null,Message:null

    
    },
    // contrabution info
    {
        type: null,name:null,Message:null

    
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("hello world");
}

// Function call to initialize app
init();
