const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Mark', 101, 'mark@fakeEmail.com', 'mkanczuzewski');

    expect(engineer.name).toBe('Mark');
    expect(engineer.id).toBe(101);
    expect(engineer.emailAddress).toBe('mark@fakeEmail.com');
    expect(engineer.gitHubUser).toBe('mkanczuzewski');
});

test('creates an engineer object and verifies gitHubUser', () => {
    const engineer = new Engineer('Mark', 101, 'mark@fakeEmail.com', 'mkanczuzewski');

    expect(engineer.getGitHubUser()).toBe('mkanczuzewski');
});

test('creates an engineer object and verifies getRole', () => {
    const engineer = new Engineer('Mark', 101, 'mark@fakeEmail.com', 'mkanczuzewski');

    expect(engineer.getRole()).toBe('Engineer');
});