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
        }
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
        {
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add another Engineer or Intern?',
        }
    ])
    .then((engineerInput) => 
    {
        const engineer = new Engineer(engineerInput.name, engineerInput.empId, engineerInput.emailAdd, engineerInput.gitUser)
        employeeArray.push(engineer);
        if(engineerInput.addAnother) 
        {
            askQuestion();
        }
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
        {
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add another Engineer or Intern?',
        }
    ])
    .then((internInput) => 
    {
        const intern = new Intern(internInput.name, internInput.empId, internInput.emailAdd, internInput.school)
        employeeArray.push(intern);
        if(internInput.addAnother) 
        {
            askQuestion(); 
        }
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
    .then(askQuestion)
    .then(console.log(employeeArray));
module.exports = promptQuestionsManager;