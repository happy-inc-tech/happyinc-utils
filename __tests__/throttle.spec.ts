import throttle from '../src/throttle';

describe('Throttle', function () {
    test('Throttling works correctly', (done) => {
        const originalFunction = jest.fn().mockImplementation(() => true);
        const throttled = throttle(originalFunction, 50);
        const interval = setInterval(() => throttled(), 1);
        setTimeout(() => {
            clearInterval(interval);
            expect(originalFunction).toBeCalledTimes(4);
            done();
        }, 200);
    });
});
