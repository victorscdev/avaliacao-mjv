import { Fetch } from "core/infrastructure/database/fetch.database";

export class UserGateway extends Fetch {

    createUser(payload: any) {
        return this.request('user/create', 'POST', payload)
    }

    getList() {
        return this.request('user', 'GET')
    }

    getUserById(id: string) {
        return this.request(`user/${id}`, 'GET')
    }

    putUpdateUser(id: string, payload: any) {
        return this.request(`user/${id}`, 'PUT', payload)
    }
    
    deleteUserById(id: string) {
        return this.request(`user/${id}`, 'DELETE')
    }
}