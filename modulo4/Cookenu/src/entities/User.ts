export class User{
    constructor(
        private name: string,
        private email: string,
        private password: string,
        private id: string
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