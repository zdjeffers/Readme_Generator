// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [title,
descriptioon,
installation,
usage,
contribution,
test,
license(list),
github,
email,
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
