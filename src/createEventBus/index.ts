/**
 * Создание простой шины событий
 */
export default function createEventBus(): EventBus {
    const listeners: Record<string, ListenerObject> = {};

    return {
        dispatch(eventName, ...parameters): void {
            Object.values(listeners).forEach(
                (listener) =>
                    listener.type === eventName &&
                    listener.handler(...parameters)
            );
        },
        subscribe(type, handler): CallableFunction {
            const id = Math.random().toString(36).slice(2, 8);
            listeners[id] = { type, handler };
            return (): boolean => delete listeners[id];
        },
        once(type, handler): void {
            const unsubscribe = this.subscribe(
                type,
                (...parameters: unknown[]) => {
                    handler(...parameters);
                    unsubscribe();
                }
            );
        }
    };
}

interface EventBus {
    dispatch: (eventName: string, ...parameters: unknown[]) => void;
    subscribe: (
        eventName: string,
        handler: CallableFunction
    ) => CallableFunction;
    once: (eventName: string, handler: CallableFunction) => void;
}

interface ListenerObject {
    type: string;
    handler: CallableFunction;
}
