import { IUser } from "../models/user.model";
import { IUserRepository } from "../repositories/user.repositories";
import { UserGateway } from "core/infrastructure/gateways/user.gateway";

export class UserService extends UserGateway implements IUserRepository {

    create(user: IUser): Promise<void> {
        return this.createUser(user)
    }

    read(id: string): Promise<IUser | null | any> {
        return this.getUserById(id)
    }

    update(id: string, user: IUser | any): Promise<void> {
        return this.putUpdateUser(id, user)
    }

    delete(id: string): Promise<void> {
        return this.deleteUserById(id)
    }

    createUserData(user: IUser) {
        return {
            id: user.id,
            dateOfBirth: new Date(user.dateOfBirth).toLocaleDateString('pt-BR'),
            email: user.email,
            firstName: user.firstName,
            gender: user.gender,
            lastName: user.lastName,
            phone: user.phone,
            picture: user.picture,
            title: user.title,
            city: user.location.city,
            country: user.location.country,
            state: user.location.state,
            street: user.location.street,
            timezone: user.location.timezone,
        }
    }

    deleteUserDataById(users: any, userId: string) {
        let newArray = [...users]
        newArray.forEach((user, index) => {
            if (user.id === userId) {
                users.splice(0, index)
            }
        })
        return newArray
    }
}