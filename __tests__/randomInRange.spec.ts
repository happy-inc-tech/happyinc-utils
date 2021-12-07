import randomInRange from '../src/randomInRange';

const min = 5;
const max = 120;

describe('Random In Range', function () {
    test('Works correctly', () => {
        const randomNumber = randomInRange(min, max);
        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).toBeLessThanOrEqual(max);
    });
});
