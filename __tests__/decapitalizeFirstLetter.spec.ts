import decapitalizeFirstLetter from '../src/decapitalizeFirstLetter';

describe('Decapitalize first letter', function () {
    test('Returns string with decapitalized letter', () => {
        expect(decapitalizeFirstLetter('String').charAt(0)).toBe('s');
    });

    test('If first char is number - it is ok', () => {
        expect(decapitalizeFirstLetter('1111').charAt(0)).toBe('1');
    });
});
