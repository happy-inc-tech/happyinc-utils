import safelyToFixed from '../src/safelyToFixed';

const number = 1.1234;
const number2 = 5;

describe('Safely To Fixed', function () {
    test('First argument is valid?', () => {
        expect(safelyToFixed('string', 1)).toBe('-.-');
        expect(safelyToFixed(NaN, 1)).toBe('-.-');
    });
    test('Works correctly with two valid arguments', () => {
        expect(safelyToFixed(number, 2)).toBe('1.12');
    });
    test('If too big the second argument', () => {
        expect(safelyToFixed(number2, 10000)).toBe('-.-');
    });

    test('To Fixed with the third argument', () => {
        expect(safelyToFixed(number, 2, 'test')).toBe('1.12test');
    });
});
