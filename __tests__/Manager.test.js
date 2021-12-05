const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Mark', 101, 'mark@fakeEmail.com', 5002);

    expect(manager.name).toBe('Mark');
    expect(manager.id).toBe(101);
    expect(manager.emailAddress).toBe('mark@fakeEmail.com');
    expect(manager.officeNo).toBe(5002);
});

test('creates an manager object and verifies getRole', () => {
    const manager = new Manager('Mark', 101, 'mark@fakeEmail.com', 5002);

    expect(manager.getofficeNo()).toBe(5002);
});

test('creates an manager object and verifies getRole', () => {
    const manager = new Manager('Mark', 101, 'mark@fakeEmail.com', 5002);

    expect(manager.getRole()).toBe('Manager');
});