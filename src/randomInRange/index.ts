/**
 * Рандомное число из промежутка
 *
 * @param min
 * @param max
 */
export default function randomInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
