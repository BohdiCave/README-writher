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

let fileName, licBadge, licText; 

inquirer
    .prompt([
        {type: "input", message: questions[0], name: "profile"}, 
        {type: "input", message: questions[1], name: "email"},
        {type: "input", message: questions[2], name: "title"},
        {type: "list", message: questions[3], name: "license", choices: ["GNU GPL v3", "MIT", "Mozilla PL 2.0"]},
        {type: "input", message: questions[4], name: "description"},
        {type: "input", message: questions[5], name: "install"},
        {type: "input", message: questions[6], name: "usage"},
        {type: "input", message: questions[7], name: "contribute"},
        {type: "input", message: questions[8], name: "test"}
    ])
    .then(response => {
        fileName = 'README.md';
        if (response.license === "GNU GPL v3") {
            licBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            licText = `GNU GENERAL PUBLIC LICENSE \n\r Version 3, 29 June 2007 \n\r Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/> \n\r Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed. [More...](https://www.gnu.org/licenses/gpl-3.0)`;
        } else if (response.license === "MIT") {
            licBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            licText = `Copyright © 2020 ${response.profile} \n\r Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: \n\r The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. \n\r THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. [More...](https://opensource.com/article/19/4/history-mit-license)`;
        } else if (response.license === "Mozilla PL 2.0") {
            licBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
            licText = `MPL is a copyleft license that is easy to comply with. You must make the source code for any of your changes available under MPL, but you can combine the MPL software with proprietary code, as long as you keep the MPL code in separate files. Version 2.0 is, by default, compatible with LGPL and GPL version 2 or greater. You can distribute binaries under a proprietary license, as long as you make the source available under MPL. [More...](https://tldrlegal.com/license/mozilla-public-license-2.0-%28mpl-2%29)`;
        }
        init(fileName, response);
    })
    .catch(err => console.log(err))


// function to write README file
function writeToFile(fileName, response) {
    fs.writeFile(`${fileName}`, someThing(response, licBadge, licText), function(err) {
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
