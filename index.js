const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

var employeeArray = [];

const promptQuestionsManager = () => 
{
    return inquirer.prompt
    ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
        },
        {
            type: 'input',
            name: 'empId',
            message: 'What is the managers employee ID?',
        },
        {
            type: 'input',
            name: 'emailAdd',
            message: 'What is the managers email address?',
        },
        {
            type: 'input',
            name: 'officeNo',
            message: 'What is the managers office number?',
        },
    ])
    .then((managerInput) => 
    {
        const manager = new Manager(managerInput.name, managerInput.empId, managerInput.emailAdd, managerInput.officeNo)
        employeeArray.push(manager);
        // console.log(employeeArray)
        // console.log(managerInput.name);
        // console.log(manager);
    })
};


module.exports = promptQuestionsManager;