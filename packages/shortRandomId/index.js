/**
 * Создать случайный ID состоящий из 6 символов
 */
export default function shortRandomId() {
    return Math.random().toString(36).substring(2, 8);
}
