/**
 * Обход всех уровней вложенных объектов и массивов с вызовом коллбэка на каждый.
 * @param traversable
 * @param callback
 * @param childrenKey
 */
export default function walk<T = any>(traversable: any | any[], callback: WalkCallback<T>, childrenKey?: string): void;
declare type WalkCallback<T> = (node: T) => void;
export {};
