/**
 * Группировка массива в объект по определённому
 * строковому признаку
 *
 * @param target
 * @param groupByGetter
 */
export default function arrayGroupBy<T>(target: T[], groupByGetter: (element: T) => string): Record<string, T[]>;
