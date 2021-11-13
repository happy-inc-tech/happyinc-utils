import randomUUID from '../src/randomUUID';

const UUIDregex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

describe('Random UUID', function () {
    test('Generates valid UUID', () => {
        const uuid = randomUUID();
        expect(UUIDregex.test(uuid)).toBeTruthy();
    });

    test('Two values are different', () => {
        expect(randomUUID()).not.toBe(randomUUID());
    });
});
