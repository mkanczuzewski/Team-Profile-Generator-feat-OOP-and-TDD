class Employee{
    constructor(employeeName, employeeId, employeeEmailAddress)
    {
        this.name = employeeName;
        this.id = employeeId;
        this.emailAddress = employeeEmailAddress;
    }

    // retrieves the employee's name
    getName()
    {
        return this.name;
    }

        // retrieves the employee's id
    getId()
    {
        return this.id;
    }

        // retrieves the employee's email address
    getEmail()
    {
        return this.emailAddress;
    }

        // retrieves the employee's role
    getRole()
    {
        return 'Employee';
    }
};

// to be exported
module.exports = Employee;