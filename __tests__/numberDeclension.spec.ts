import numberDeclension from '../src/numberDeclension';

const days = ['день', 'дня', 'дней'];
const day = 17;
const day2 = 22;
const day3 = 1;

describe('Number Declension', function () {
    test('Works correctly', () => {
        expect(numberDeclension(day, days)).toBe('дней');
        expect(numberDeclension(day2, days)).toBe('дня');
        expect(numberDeclension(day3, days)).toBe('день');
    });
});
