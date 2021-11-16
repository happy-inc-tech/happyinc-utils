export default function parseQueryString(queryString) {
    const query = (queryString ?? window?.location?.search ?? '').replace(/^\?{1}/, '');
    return query.split('&').reduce((total, current) => {
        const [key, value] = current.split('=');
        total[key] = value;
        return total;
    }, {});
}
//# sourceMappingURL=index.js.map