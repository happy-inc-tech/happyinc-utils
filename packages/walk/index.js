/**
 * Обход всех уровней вложенных объектов и массивов с вызовом коллбэка на каждый.
 * @param traversable
 * @param callback
 * @param childrenKey
 */
export default function walk(traversable, callback, childrenKey = 'children') {
    if (Array.isArray(traversable)) {
        traversable.forEach((element) => walk(element, callback));
    }
    else {
        callback(traversable);
        const nextTraversable = traversable[childrenKey];
        if (Array.isArray(nextTraversable) && nextTraversable.length) {
            walk(nextTraversable, callback, childrenKey);
        }
    }
}
