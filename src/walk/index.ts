/**
 * Обход всех уровней вложенных объектов и массивов с вызовом коллбэка на каждый.
 * @param traversable
 * @param callback
 * @param childrenKey
 */
export default function walk<T = unknown>(
    traversable: T | T[],
    callback: WalkCallback<T>,
    childrenKey = 'children'
): void {
    if (Array.isArray(traversable)) {
        traversable.forEach((element: T) => walk(element, callback));
    } else {
        callback(traversable);
        if (childrenKey in (traversable as Record<string, unknown>)) {
            const nextTraversable = (traversable as Record<string, unknown>)[
                childrenKey
            ];
            if (Array.isArray(nextTraversable) && nextTraversable.length) {
                walk(nextTraversable, callback, childrenKey);
            }
        }
    }
}

type WalkCallback<T = unknown> = (node: T) => void;
