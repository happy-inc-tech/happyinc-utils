import capitalizeFirstLetter from "../src/captalizeFirstLetter";

describe('Capitalize first letter', function () {
    test('Returns string with capitalized letter', () => {
        expect(capitalizeFirstLetter('string').charAt(0)).toBe('S')
    })

    test('If first char is number - it is ok', () => {
        expect(capitalizeFirstLetter('1111').charAt(0)).toBe('1')
    })
});