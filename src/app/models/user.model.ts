export interface IUser {
    email: string;
    firstName: string;
    lastName: string;
    mobilePhoneNumber: number;
    identityNumber: number;
    password: string;
    token: string;
}

export class User implements IUser {
    constructor(
        public email: string,
        public firstName: string,
        public lastName: string,
        public mobilePhoneNumber: number,
        public identityNumber: number,
        public password: string,
        public token: string
    ) {}
}
