import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async createUser(user: User): Promise<void>{
        try{
        await BaseDatabase.connection('Users').insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        })
        }catch(error: any){
        throw new Error(error.sqlMessage || error.message) 
        }
    } 

    public async findUserById(id: string): Promise<User> {
        try{
            const user = await BaseDatabase.connection('Users').select('*').where({id: id})
            return User.toUserModel(user[0]);

        }catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }   
}