const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');

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

const promptQuestionsEmployee = employeeData => 
{
    console.log(`
    =================
    Add a New Employee
    =================
    `);
    return inquirer.prompt
    ([
        {
            type: 'list',
            name: 'empType',
            message: 'Do you want to add an engineer or an intern?',
            choices: ["Engineer", "Intern"]
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee\'s name?',
        },
        {
            type: 'input',
            name: 'empId',
            message: 'What is the employee\'s employee ID?',
        },
        {
            type: 'input',
            name: 'emailAdd',
            message: 'What is the employee\'s email address?',
        },
        {
            type: 'input',
            name: 'gitUser',
            message: 'What is the employee\'s GitHub username?',
            when: (answers) => answers.empType === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?',
            when: (answers) => answers.empType === 'Intern',
        },
        {
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add another Engineer or Intern?',
        }
    ])
    .then((employeeInput) => 
    {
        if (employeeInput.empType === 'Engineer')
        {
        const engineer = new Engineer(employeeInput.name, employeeInput.empId, employeeInput.emailAdd, employeeInput.gitUser)
            employeeArray.push(engineer);
        }
        else if (employeeInput.empType === 'Intern')
        {
        const intern = new Intern(employeeInput.name, employeeInput.empId, employeeInput.emailAdd, employeeInput.school)
        employeeArray.push(intern);
        }
        
        if(employeeInput.addAnother === true) 
        {
            return promptQuestionsEmployee(employeeArray);
        }
        else
        {
            return employeeArray;
        }
    })
};

promptQuestionsManager()
    .then (promptQuestionsEmployee)
    .then (employeeArray => 
    {
        const pageHTML = generatePage(employeeArray)
            fs.writeFile('./dist/index.html', pageHTML, err => 
        {
            if (err) throw new Error(err);
            
            console.log('Page created! Check out index.html in this directory to see it!');
        });
    });