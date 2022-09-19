import { userDTO } from "../models/User";


export class UserBusiness {
    async create(user:userDTO){
        const {name, email, password, role} = user

        if(!name || !email || !password){
            throw new Error
        }
    }
}

export default UserBusiness