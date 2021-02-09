// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Title of Project:"
    },
    {
        type: 'input',
        name: 'description',
        message: "Description of Project:"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Project Usage:"
    },
    {
        type: 'input',
        name: 'Contribution',
        message: "Your Project Contribution:"
    },
    {
        type: 'input',
        name: 'test',
        message: "Tests Run:"
    },
    {
        type: 'list',
        name: 'license',
        choices: ["None", "MIT", "ISC", "Apache 2.0", "MPL 2.0"]
    },
    {
        type: 'input',
        name: 'github',
        message: "Your Github Account:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Your Email:"
    },
];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
        let newReadMe = generateMarkdown(data)
        fs.writeFile("README.md", newReadMe, (err) =>
            err ? console.log(err) : console.log('Congratulations! You have created your README!')
        );
    })
}
// Function call to initialize app
init();