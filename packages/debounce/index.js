/**
 * Вызов функции f не более одного раза в ms секунд
 * Изначально взято с https://learn.javascript.ru/task/debounce
 * @param f
 * @param ms
 * @param thisArg
 */
export default function debounce(f, ms, thisArg = undefined) {
    let isCooldown = false;
    return function (...args) {
        if (isCooldown)
            return;
        // @ts-ignore
        const result = f.apply(thisArg, args);
        isCooldown = true;
        setTimeout(() => (isCooldown = false), ms);
        return result;
    };
}
