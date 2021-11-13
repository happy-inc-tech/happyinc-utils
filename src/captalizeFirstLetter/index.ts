/**
 * Переводит первый символ в строке в верхний регистр
 * @param string
 */

export default function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
