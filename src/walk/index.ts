/**
 * Обход всех уровней вложенных объектов и массивов с вызовом коллбэка на каждый.
 * @param traversable
 * @param callback
 * @param childrenKey
 */
export default function walk(
    traversable: unknown | unknown[],
    callback: WalkCallback,
    childrenKey = 'children'
): void {
    if (Array.isArray(traversable)) {
        traversable.forEach((element: unknown) => walk(element, callback));
    } else {
        callback(traversable);
        const nextTraversable = (traversable as Record<string, unknown>)[
            childrenKey
        ];
        if (Array.isArray(nextTraversable) && nextTraversable.length) {
            walk(nextTraversable, callback, childrenKey);
        }
    }
}

type WalkCallback = (node: unknown) => void;
