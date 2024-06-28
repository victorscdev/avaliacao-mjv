export interface IUser {
    id: string;
    dateOfBirth: Date;
    email: string;
    firstName: string;
    gender: string;
    lastName: string;
    location: {
        street: string;
        city: string;
        state: string;
        country: string;
        postcode: number;
        timezone?: string
    };
    phone: string;
    picture: string;
    registerDate: Date;
    title: string;
    updatedDate: Date;
}