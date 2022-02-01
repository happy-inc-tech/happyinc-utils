import delay from '../src/delay';

describe('Delay', function () {
    test('Delay calls setTimeout', async () => {
        jest.spyOn(global, 'setTimeout');
        await delay(200);
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 200);
    });
});
