export default function simpleRequest({ url, method = 'GET', body = {}, headers = {} }) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open(method, url, true);
        request.setRequestHeader('Content-Type', 'application/json');
        for (const headerKey in headers) {
            if (!Object.prototype.hasOwnProperty.call(headers, headerKey))
                continue;
            request.setRequestHeader(headerKey, headers[headerKey]);
        }
        request.onreadystatechange = () => {
            if (request.status !== 200) {
                reject(new Error(`${request.status}: ${request.statusText}`));
            }
            else {
                try {
                    const parsedJson = JSON.parse(request.response);
                    resolve(parsedJson);
                }
                catch (e) {
                    resolve(request.response);
                }
            }
        };
        request.onerror = () => {
            reject(new Error(`Request rejected with error ${request.status}`));
        };
        request.send(JSON.stringify(body));
    });
}
