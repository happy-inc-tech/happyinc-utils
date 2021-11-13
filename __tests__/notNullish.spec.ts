import { notNullish } from '../src/notNullish';

const expectTrueArray: unknown[] = [0, '', false];
const expectFalseArray: unknown[] = [null, undefined, NaN];

describe('Not nullish', function () {
    test('Works correctly', () => {
        expectTrueArray.forEach((v) => {
            console.log(v);
            expect(notNullish(v)).toBeTruthy();
        });
        expectFalseArray.forEach((v) => expect(notNullish(v)).toBeFalsy());
    });
});
