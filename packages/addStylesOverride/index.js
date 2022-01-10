/**
 * Добавляет тег <style> в <head>, прописывая внутрь стили из styleString
 * @param styleString
 */
export default function addStylesOverride(styleString) {
    const style = document.createElement('style');
    style.innerHTML = styleString;
    const ref = document.querySelectorAll('link');
    const parentNode = ref[ref.length - 1].parentNode;
    parentNode && parentNode.insertBefore(style, ref[ref.length] || null);
}
