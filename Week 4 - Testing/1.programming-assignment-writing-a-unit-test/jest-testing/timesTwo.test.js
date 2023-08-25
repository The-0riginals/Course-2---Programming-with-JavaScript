const timesTwo = require('./timesTwo');

// Write the first test
test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20);
});

// cd to root folder jest-testing then: `npm install --save-dev jest`
// `npm test` for testing all tests file in the project
// `npm test timesTwo.test.js` for testing only this file
