/**
 * Вызов функции f не более одного раза в ms секунд
 * Изначально взято с https://learn.javascript.ru/task/debounce
 * @param f
 * @param ms
 * @param thisArg
 */
export default function debounce(f: CallableFunction, ms: number, thisArg?: unknown): CallableFunction;
