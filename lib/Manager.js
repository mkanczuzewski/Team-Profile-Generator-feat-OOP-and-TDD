const Employee = require('./Employee');

class Manager extends Employee 
{
    constructor(name, id, emailAddress, managerOfficeNo)
    {
        super(name, id, emailAddress);

        this.officeNo = managerOfficeNo
    }
    getRole()
    {
        return 'Manager';
    }
};

module.exports = Manager;