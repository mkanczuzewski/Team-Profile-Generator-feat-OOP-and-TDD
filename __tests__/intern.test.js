const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Mark', 101, 'mark@fakeEmail.com', 'WMU');

    expect(intern.name).toBe('Mark');
    expect(intern.id).toBe(101);
    expect(intern.emailAddress).toBe('mark@fakeEmail.com');
    expect(intern.school).toBe('WMU');
});

test('creates an intern object and verifies getSchool', () => {
    const intern = new Intern('Mark', 101, 'mark@fakeEmail.com', 'WMU');

    expect(intern.getSchool()).toBe('WMU');
});

test('creates an intern object and verifies getRole', () => {
    const intern = new Intern('Mark', 101, 'mark@fakeEmail.com', 'WMU');

    expect(intern.getRole()).toBe('Intern');
});