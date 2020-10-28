const fs = require('fs');
const inquirer = require('inquirer');
const someThing  = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
    'What is your GitHub profile name?',
    'What is your contact email for further questions?',
    'What is your project\'s title?',
    'What license are you using for the project?',
    'Please provide a brief description of your project.',
    'Please provide the installation instructions.',
    'Please provide any usage information.',
    'Please provide your guidelines for contributing to the project.',
    'Please provide any testing instructions'
];

let fileName, data; 

inquirer
    .prompt([
        {type: "input", message: questions[0], name: "profile"}, 
        {type: "input", message: questions[1], name: "email"},
        {type: "input", message: questions[2], name: "title"},
        {type: "list", message: questions[3], name: "license", choices: ["GNU", "MIT", "MPL"]},
        {type: "input", message: questions[4], name: "description"},
        {type: "input", message: questions[5], name: "install"},
        {type: "input", message: questions[6], name: "usage"},
        {type: "input", message: questions[7], name: "contribute"},
        {type: "input", message: questions[8], name: "test"}
    ])
    .then(response => {
        fileName = 'README.md';
        init(fileName, response);
    })
    .catch(err => console.log(err))


// function to write README file
function writeToFile(fileName, response) {
    fs.writeFile(`${fileName}`, someThing(response), function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("README generated!");
        }
    });
}

// function to initialize program
function init(fileName, response) {
    if (response.title) {
        writeToFile(fileName, response);
    } else {
        console.log("Hell!");
    }
}

// function call to initialize program
// init();
