import { Injectable } from '@angular/core';

@Injectable()
export class FetchBase {
    private url = 'https://dummyapi.io/data/v1';
    private token = '64cbeddc2535491d86990b6e';

    constructor() { }

    private fetchConfig(method: string, payload?: any) {
        return {
            method: method,
                headers: {
                'Content-type': 'application/json',
                    'app-id': this.token
            },
            body: JSON.stringify(payload)
        }
    }

    public async fetchData(endpoint: string, method: string): Promise<any> {
        try {
            const response = await fetch(`${this.url}/${endpoint}`, this.fetchConfig(method));
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}
