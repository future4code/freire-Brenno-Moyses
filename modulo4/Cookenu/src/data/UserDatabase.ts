import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async createUser(user: User): Promise<void>{
        try{
        await BaseDatabase.connection('Users').insert({
        id: user.getId(),
        email: user.getEmail(),
        password: user.getPassword(),
        name: user.getName()
        })
        }catch(error: any){
        throw new Error(error.sqlMessage || error.message) 
        }
    } 

    public async findUserByEmail (email: string): Promise<User> {
        console.log(email)
        const user = await BaseDatabase.connection('Users').select('*').where({email})
        return user[0];
    }   
}