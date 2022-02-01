/**
 * Вызов функции f не более одного раза в ms секунд, с вызовом после
 * прошедшей паузы
 * Изначально взято с https://learn.javascript.ru/task/throttle
 * @param f
 * @param ms
 */
export default function throttle(f: CallableFunction, ms: number): CallableFunction;
