import debounce from '../src/debounce';

describe('Debounce', function () {
    test('Debounce works correctly', (done) => {
        const originalFunction = jest.fn().mockImplementation(() => true);
        const debounced = debounce(originalFunction, 200);
        for (let i = 0; i < 200; i++) {
            debounced();
        }
        setTimeout(() => {
            debounced();
            expect(originalFunction).toBeCalledTimes(2);
            done();
        }, 300);
    });
});
