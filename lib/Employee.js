class Employee{
    constructor(employeeName, employeeId, employeeEmailAddress)
    {
        this.name = employeeName;
        this.id = employeeId;
        this.emailAddress = employeeEmailAddress;
    }

    getName()
    {
        return this.name;
    }

    getId()
    {
        return this.id;
    }

    getEmail()
    {
        return this.emailAddress;
    }

    getRole()
    {
        return 'Employee';
    }
};

module.exports = Employee;