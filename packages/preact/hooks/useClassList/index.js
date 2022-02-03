/**
 * Реактивный список классов на основе объекта, где ключ - строка
 * (имя класса), а значение - Boolean (рендерить или нет).
 */
import { useMemo } from 'preact/hooks';
export default function useClassList(classMap) {
    return useMemo(() => ` ${Object.keys(classMap)
        .filter((key) => classMap[key])
        .join(' ')}`, [classMap]);
}
