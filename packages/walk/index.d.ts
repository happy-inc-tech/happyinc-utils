/**
 * Обход всех уровней вложенных объектов и массивов с вызовом коллбэка на каждый.
 * @param traversable
 * @param callback
 * @param childrenKey
 */
export default function walk(traversable: unknown | unknown[], callback: WalkCallback, childrenKey?: string): void;
declare type WalkCallback = (node: unknown) => void;
export {};
