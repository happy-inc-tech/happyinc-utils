/**
 * Реактивный список классов на основе объекта, где ключ - строка
 * (имя класса), а значение - Boolean (рендерить или нет).
 */
export default function useClassList(classMap: Record<string, boolean>): string;
