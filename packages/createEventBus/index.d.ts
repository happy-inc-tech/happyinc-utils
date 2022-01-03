/**
 * Создание простой шины событий
 */
export default function createEventBus(): EventBus;
interface EventBus {
    dispatch: (eventName: string, ...parameters: unknown[]) => void;
    subscribe: (eventName: string, handler: CallableFunction) => CallableFunction;
    once: (eventName: string, handler: CallableFunction) => void;
}
export {};
