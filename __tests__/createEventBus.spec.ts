import createEventBus from '../src/createEventBus';

describe('Create event bus', function () {
    test('Creates a valid event bus', () => {
        const eventBus = createEventBus();
        expect(typeof eventBus.subscribe).toBe('function');
    });

    test('Subscribe method returns function', () => {
        const eventBus = createEventBus();
        const unsubscribe = eventBus.subscribe('test', () => ({}));
        expect(typeof unsubscribe).toBe('function');
    });

    test('Catches event after subscribe', () => {
        const eventBus = createEventBus();
        const handler = jest.fn();
        const unsubscribe = eventBus.subscribe('test', handler);
        setTimeout(() => {
            eventBus.dispatch('test');
        }, 5);
        setTimeout(() => {
            expect(handler).toBeCalled();
            unsubscribe();
        }, 10);
    });

    test('Does not catch unwatched events', () => {
        const eventBus = createEventBus();
        const handler = jest.fn();
        const unsubscribe = eventBus.subscribe('test', handler);
        setTimeout(() => {
            eventBus.dispatch('third-party');
        }, 5);
        setTimeout(() => {
            expect(handler).toBeCalledTimes(0);
            unsubscribe();
        }, 10);
    });

    test('Does not catch event if unsubscribed', () => {
        const eventBus = createEventBus();
        const handler = jest.fn();
        const unsubscribe = eventBus.subscribe('test', handler);
        setTimeout(() => {
            unsubscribe();
            eventBus.dispatch('test');
        }, 5);
        setTimeout(() => {
            expect(handler).toBeCalledTimes(0);
            unsubscribe();
        }, 10);
    });

    test('If "once" method is used, only one catch is happening', () => {
        const eventBus = createEventBus();
        const handler = jest.fn();
        eventBus.once('test', handler);
        setTimeout(() => {
            eventBus.dispatch('test');
            eventBus.dispatch('test');
        }, 5);
        setTimeout(() => {
            eventBus.dispatch('test');
            expect(handler).toBeCalledTimes(1);
        }, 10);
    });

    test('Data can be passed to handler', () => {
        const eventBus = createEventBus();
        const handler = (value: string) => {
            expect(value).toBe('12345');
        };
        eventBus.once('test', handler);
        eventBus.dispatch('test', '12345');
    });
});
