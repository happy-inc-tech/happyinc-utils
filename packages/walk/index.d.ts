/**
 * Обход всех уровней вложенных объектов и массивов с вызовом коллбэка на каждый.
 * @param traversable
 * @param callback
 * @param childrenKey
 */
export default function walk<T = unknown>(traversable: T | T[], callback: WalkCallback<T>, childrenKey?: string): void;
declare type WalkCallback<T = unknown> = (node: T) => void;
export {};
