/**
 * Создать случайный ID состоящий из 6 символов
 */
export default function shortRandomId(): string {
    return Math.random().toString(36).substring(2, 8);
}
