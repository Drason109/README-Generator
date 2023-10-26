//Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generaterReadMe = require('./utils/generaterReadMe');
//Questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address'
    },
    {
        type: 'input',
        name: 'title',
        message: "what is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'please write a short description about your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your porject have?',
        choices: ['Mozilla', 'Apache', 'MIT', 'Boost', '']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'how do you get the required dependencies to run this code?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your project',
    },
    {
        type: 'input',
        name: 'rules',
        message: 'Intruction on how to use the repo',
    },
    {
        type: 'input',
        name: 'edit',
        message: 'Intruction on how to edit the repo'
    },

];

//Writes README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

//function to initialize app
function init() {
    inquirer.prompt(questions).then((anwsers) => {
        console.log('Generating README...');
        writeToFile('README.md',generaterReadMe({...anwsers}));
    });
}

// Function called to initialize app
init();
