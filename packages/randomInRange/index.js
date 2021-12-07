/**
 * Рандомное число из промежутка
 *
 * @param min
 * @param max
 */
export default function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
