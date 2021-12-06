const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var employeeArray = [];

const promptQuestionsManager = () => 
{
    return inquirer.prompt
    ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager\'s name?',
        },
        {
            type: 'input',
            name: 'empId',
            message: 'What is the manager\'s employee ID?',
        },
        {
            type: 'input',
            name: 'emailAdd',
            message: 'What is the manager\'s email address?',
        },
        {
            type: 'input',
            name: 'officeNo',
            message: 'What is the manager\'s office number?',
        },
    ])
    .then((managerInput) => 
    {
        const manager = new Manager(managerInput.name, managerInput.empId, managerInput.emailAdd, managerInput.officeNo)
        employeeArray.push(manager);
    })
};

const promptQuestionsEngineer = () => 
{
    return inquirer.prompt
    ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'empId',
            message: 'What is the engineer\'s employee ID?',
        },
        {
            type: 'input',
            name: 'emailAdd',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'gitUser',
            message: 'What is the engineer\'s GitHub username?',
        },
    ])
    .then((engineerInput) => 
    {
        const engineer = new Engineer(engineerInput.name, engineerInput.empId, engineerInput.emailAdd, engineerInput.gitUser)
        employeeArray.push(engineer);
    })
};

const promptQuestionsIntern = () => 
{
    return inquirer.prompt
    ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',
            name: 'empId',
            message: 'What is the intern\'s employee ID?',
        },
        {
            type: 'input',
            name: 'emailAdd',
            message: 'What is the intern\'s email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?',
        },
    ])
    .then((internInput) => 
    {
        const intern = new Intern(internInput.name, internInput.empId, internInput.emailAdd, internInput.school)
        employeeArray.push(intern);
    })
};

const askQuestion = () =>
{
    return inquirer.prompt
    ([
        {
            type: 'list',
            name: 'empType',
            message: 'Do you want to add an engineer or an intern?',
            choices: ["Engineer", "Intern"]
        },
    ])
    .then((typeAnswer) =>
    {
        console.log(typeAnswer)
        if(typeAnswer.empType === "Engineer")
        {
            promptQuestionsEngineer();
        } else 
        {
            promptQuestionsIntern();
        }
    })
};

promptQuestionsManager()
    .then(askQuestion);

module.exports = promptQuestionsManager;