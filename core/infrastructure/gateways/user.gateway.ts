import { Fetch } from "core/infrastructure/database/fetch.database";

export class UserGateway extends Fetch {

    getList() {
        return this.request('user?limit=10', 'GET')
    }

    getUserById(id: string) {
        return this.request(`user/${id}`, 'GET')
    }

    putUpdateUser(id: string, payload: any) {
        return this.request(`user/${id}`, 'PUT', payload)
    }
}