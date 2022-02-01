/**
 * Задержка выполнения через setTimeout, завёрнутая в промис
 * @param ms
 */
export default function delay(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
}
