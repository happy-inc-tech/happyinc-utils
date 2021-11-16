export default function parseQueryString(queryString) {
    var _a, _b;
    const query = ((_b = queryString !== null && queryString !== void 0 ? queryString : (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.search) !== null && _b !== void 0 ? _b : '').replace(/^\?/, '');
    return query.split('&').reduce((total, current) => {
        const [key, value] = current.split('=');
        total[key] = value;
        return total;
    }, {});
}
