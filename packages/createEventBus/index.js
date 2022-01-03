/**
 * Создание простой шины событий
 */
export default function createEventBus() {
    const listeners = {};
    return {
        dispatch(eventName, ...parameters) {
            Object.values(listeners).forEach((listener) => listener.type === eventName &&
                listener.handler(...parameters));
        },
        subscribe(type, handler) {
            const id = Math.random().toString(36).slice(2, 8);
            listeners[id] = { type, handler };
            return () => delete listeners[id];
        },
        once(type, handler) {
            const unsubscribe = this.subscribe(type, (...parameters) => {
                handler(...parameters);
                unsubscribe();
            });
        }
    };
}
