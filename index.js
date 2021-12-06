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
        // console.log(employeeArray)
        // console.log(managerInput.name);
        // console.log(manager);
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
    //    console.log(employeeArray)
//        console.log(managerInput.name);
//        console.log(manager);
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
        console.log(employeeArray)
//        console.log(managerInput.name);
//        console.log(manager);
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
        //const answer = new answer(typeAnswer.empType)
        console.log(typeAnswer)
        if(typeAnswer.empType === "Engineer")
        {
            promptQuestionsEngineer();
        } else 
        {
            promptQuestionsIntern();
        }
        //call prompt for engineer if selected. if answer is engineer then call promptQuestionsEngineer

        //or call prompt for intern
    })
};

promptQuestionsManager()
    .then(askQuestion);

module.exports = promptQuestionsManager;