/**
 * Находит абсолютную разницу в массивах
 * @param firstArray
 * @param secondArray
 * @param eliminateDuplicate
 */
export default function arrayDifference<T = unknown>(firstArray: T[], secondArray: T[], eliminateDuplicate?: boolean, valueGetter?: CallableFunction): T[];
