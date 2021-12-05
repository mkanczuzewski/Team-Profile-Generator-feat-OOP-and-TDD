const Employee = require('./Employee');

class Intern extends Employee 
{
    constructor(name, id, emailAddress, internSchool)
    {
        super(name, id, emailAddress);

        this.school = internSchool
    }
    getSchool()
    {
        return this.school;
    }
    getRole()
    {
        return 'Intern';
    }
};

module.exports = Intern;