import shortRandomId from '../src/shortRandomId';

describe('Random Id', function () {
    test('Generates valid iD', () => {
        const uuid = shortRandomId();
        expect(uuid.length).toBe(6);
    });

    test('Two values are different', () => {
        expect(shortRandomId()).not.toBe(shortRandomId());
    });
});
