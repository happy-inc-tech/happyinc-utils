interface SimpleRequestParams {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: unknown;
    headers?: Record<string, string>;
}
export default function simpleRequest<T = unknown>({ url, method, body, headers }: SimpleRequestParams): Promise<T>;
export {};
