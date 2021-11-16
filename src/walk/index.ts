/**
 * Обход всех уровней вложенных объектов и массивов с вызовом коллбэка на каждый.
 * @param traversable
 * @param callback
 * @param childrenKey
 */
export default function walk<T = any>(
    traversable: any | any[],
    callback: WalkCallback<T>,
    childrenKey = 'children'
): void {
    if (Array.isArray(traversable)) {
        traversable.forEach((element: any) => walk(element, callback));
    } else {
        callback(traversable);
        const nextTraversable = (traversable as Record<string, any>)[
            childrenKey
        ];
        if (Array.isArray(nextTraversable) && nextTraversable.length) {
            walk(nextTraversable, callback, childrenKey);
        }
    }
}

type WalkCallback<T> = (node: T) => void;
