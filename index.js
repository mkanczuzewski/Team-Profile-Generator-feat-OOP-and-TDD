const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

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

const promptQuestionsEngineer = () => 
{
    return inquirer.prompt
    ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?',
        },
        {
            type: 'input',
            name: 'empId',
            message: 'What is the engineers employee ID?',
        },
        {
            type: 'input',
            name: 'emailAdd',
            message: 'What is the engineers email address?',
        },
        {
            type: 'input',
            name: 'gitUser',
            message: 'What is the engineers GitHub username?',
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
        }
        //call prompt for engineer if selected. if answer is engineer then call promptQuestionsEngineer

        //or call prompt for intern
    })
};

promptQuestionsManager()
    .then(askQuestion);

module.exports = promptQuestionsManager;