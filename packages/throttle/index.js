/**
 * Вызов функции f не более одного раза в ms секунд, с вызовом после
 * прошедшей паузы
 * Изначально взято с https://learn.javascript.ru/task/throttle
 * @param f
 * @param ms
 */
export default function throttle(f, ms) {
    let isThrottled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let savedArgs;
    let savedThis;
    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        // @ts-ignore
        f.apply(this, arguments);
        isThrottled = true;
        setTimeout(() => {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}
