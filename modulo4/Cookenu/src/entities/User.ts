export class User{
    constructor(
        private id: string,
        private email: string,
        private password: string,
        private name: string,
    ) {}

    public getId(){
        return this.id
    }

    public getName(){
        return this.name
    }

    public getEmail(){
        return this.email
    }

    public getPassword(){
        return this.password
    }

    static toUserModel(data: any): User {
        return new User(data.id, data.name, data.email, data.password)
    }
}