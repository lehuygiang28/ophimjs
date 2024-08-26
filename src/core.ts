export type CoreOptions = {
    host?: string;
};

export type FetchOptions = {
    headers?: HeadersInit;
    query?: Record<string, string | number | boolean>;
    data?: unknown;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
};

export class Core {
    private readonly host: string;

    constructor({ host = 'https://ophim1.com/' }: CoreOptions) {
        this.host = host.replace(/\/+$/, ''); // Remove trailing slash from host
    }

    protected async fetch<T>(url: string, options?: FetchOptions): Promise<T> {
        const { headers, query, data, method = 'GET' } = options || {};

        const queryParams = query
            ? `?${Object.entries(query)
                  .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                  .join('&')}`
            : '';

        const fetchUrl = `${this.host}/${url.replace(/^\/+/, '')}${queryParams}`; // Remove leading slash from URL

        const fetchOptions: RequestInit = {
            method,
            headers,
        };

        if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
            fetchOptions.body = JSON.stringify(data);
            fetchOptions.headers = {
                ...(fetchOptions.headers || {}),
                'Content-Type': 'application/json',
            };
        }

        return fetch(fetchUrl, fetchOptions).then((res) => res.json() as T);
    }

    protected requireAtLeastOne(object: Record<string, unknown>, keys: string[]): void {
        if (keys.length === 0) {
            // Do nothing if keys array is empty
            return;
        }
        if (keys.every((key) => !object[key])) {
            throw new Error(`At least one of [${keys.join(', ')}] is required`);
        }
    }
}
