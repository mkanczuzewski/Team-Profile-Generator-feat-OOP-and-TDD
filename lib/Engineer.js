const Employee = require('./Employee');

class Engineer extends Employee 
{
    constructor(name, id, emailAddress, engineerGitHubUser)
    {
        super(name, id, emailAddress);

        this.gitHubUser = engineerGitHubUser
    }
    getGitHubUser()
    {
        return this.gitHubUser;
    }
    getRole()
    {
        return 'Engineer';
    }
};

module.exports = Engineer;