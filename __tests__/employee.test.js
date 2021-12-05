const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Mark', 101, 'mark@fakeEmail.com');

    expect(employee.name).toBe('Mark');
    expect(employee.id).toBe(101);
    expect(employee.emailAddress).toBe('mark@fakeEmail.com');
});

test('creates an employee object and verifies getName', () => {
    const employee = new Employee('Mark', 101, 'mark@fakeEmail.com');

    expect(employee.getName()).toBe('Mark');
});

test('creates an employee object and verifies getId', () => {
    const employee = new Employee('Mark', 101, 'mark@fakeEmail.com');

    expect(employee.getId()).toBe(101);
});

test('creates an employee object and verifies getEmail', () => {
    const employee = new Employee('Mark', 101, 'mark@fakeEmail.com');

    expect(employee.getEmail()).toBe('mark@fakeEmail.com');
});

test('creates an employee object and verifies getRole', () => {
    const employee = new Employee('Mark', 101, 'mark@fakeEmail.com');

    expect(employee.getRole()).toBe('Employee');
});