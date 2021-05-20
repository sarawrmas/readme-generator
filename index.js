// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const { generateMarkdown } = require('./utils/generateMarkdown.js');
// const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Would you like to include instructions for installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Would you like to include instructions for usage?'
    },
    {
        type: 'input',
        name: 'licenses',
        message: 'Would you like to include licenses?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Not sure what to do with this yet'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Not sure what to do with this yet'
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();