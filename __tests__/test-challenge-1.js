const assignment = require('../src/assignment.js');

const { sumOfNumbers } = assignment;
const maybe = sumOfNumbers === undefined ? test.skip : test;

maybe('Challenge - 1 : my sumNumbers function can sum an array of numbers', () => {
    const numbers = [
        68,
        -68,
        27,
        94,
        72,
        -25,
        -51,
        32,
        10,
        64,
        -94,
        4,
        34,
        -86,
        90,
        81,
        20,
        -56,
        -91,
        -50
    ];
    expect(sumOfNumbers(numbers)).toBe(75);
});