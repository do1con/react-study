import { addNumber } from './util';

it('add two numbers', () => {
    const result = addNumber(1, 2);
    expect(result).toBe(3);
});

it('add two string numbers', () => {
    const result = addNumber('1', '2');
    expect(result).toBe(3);
});