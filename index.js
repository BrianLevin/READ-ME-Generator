const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')
const generateMarkdown = required('./generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?'




    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'



    },

    {
        type: 'input',
        name: 'title',
        message: 'What is  the name of your project?'


    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'



    },

    {
        type: 'input',
        name: 'install',
        message: 'How do you install the dependencies?'


    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about this repo?'

    },
    {
        type: 'input',
        name: 'tests',
        message: ' How do you install the tests?'


    },
    {
        type: 'input',
        name: 'contributing',
        message: ' What does the user need to know about  contributing to the repo?'




    },

    {
        type: 'input',
        name: 'license',
        message: 'What is the license type?',
        choices: ['MIT', 'BSD', 'Apache', 'None'],


    },





];

function init() {
    inquirer.prompt(questions).then(function (answers) {
        fs.writeFileSync('./README.md', generateMarkdown(answers));
    });


}

init();