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





    }








]