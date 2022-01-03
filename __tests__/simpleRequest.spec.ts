import simpleRequest from '../src/simpleRequest';

function mockFetch(status: number, data?: any) {
    const xhrMockObj = {
        open: jest.fn(),
        send: jest.fn(),
        setRequestHeader: jest.fn(),
        readyState: 4,
        status,
        response: JSON.stringify(data)
    };

    const xhrMockClass = () => xhrMockObj;

    // @ts-ignore
    window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);

    setTimeout(() => {
        // @ts-ignore
        xhrMockObj['onreadystatechange']();
    }, 0);
}

describe('Simple request', function () {
    test('Not throw error', () => {
        mockFetch(200, true);
        expect(async () => {
            await simpleRequest({
                url: 'test.com',
                method: 'GET'
            });
        }).not.toThrowError();
    });

    test('Returns expected result', async () => {
        mockFetch(200, true);
        const result = await simpleRequest({
            url: 'test.com',
            method: 'GET'
        });
        expect(result).toBe(true);
    });
});
