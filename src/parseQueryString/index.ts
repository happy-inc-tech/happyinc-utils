export default function parseQueryString(
    queryString?: string
): Record<string, string> {
    const query = (queryString ?? window?.location?.search ?? '').replace(
        /^\?{1}/,
        ''
    );
    return query.split('&').reduce((total: Record<string, string>, current) => {
        const [key, value] = current.split('=');
        total[key] = value;
        return total;
    }, {});
}
