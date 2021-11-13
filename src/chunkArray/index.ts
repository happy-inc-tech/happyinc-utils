/**
 * Разбивает массив на N массивов по "size" элементов в каждом
 * @param arr
 * @param size
 */
export default function chunkArray<T = any>(arr: T[], size: number): T[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_v: T, i) =>
        arr.slice(i * size, i * size + size)
    );
}
