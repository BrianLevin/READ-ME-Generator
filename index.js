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



    }








]