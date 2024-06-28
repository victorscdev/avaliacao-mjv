import { IUser } from "../models/user.model";

export interface IUserRepository {
    create(user: IUser): Promise<void>;
    read(id: string): Promise<IUser | null | any>;
    update(id: string, user: IUser): Promise<void>;
    delete(id: string): Promise<void>;
}