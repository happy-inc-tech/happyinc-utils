/**
 * Вызов функции f не более одного раза в ms секунд, с вызовом после
 * прошедшей паузы
 * Изначально взято с https://learn.javascript.ru/task/throttle
 * @param f
 * @param ms
 */
export default function throttle(
    f: CallableFunction,
    ms: number
): CallableFunction {
    let isThrottled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let savedArgs: any;
    let savedThis: unknown;

    function wrapper(this: unknown): void {
        if (isThrottled) {
            savedArgs = arguments;
            // eslint-disable-next-line @typescript-eslint/no-this-alias
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
