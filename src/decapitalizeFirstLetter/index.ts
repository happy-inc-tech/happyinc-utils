export default function decapitalizeFirstLetter(string: string): string {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
