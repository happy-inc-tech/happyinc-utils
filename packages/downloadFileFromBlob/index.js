/**
 * Скачивание файла из объекта Blob
 * @param blob
 * @param name
 */
export default function downloadFileFromBlob(blob, name) {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = name ?? new Date().toLocaleString();
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
}
