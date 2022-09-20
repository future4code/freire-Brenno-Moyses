import { userDTO } from "../models/User";


export class UserBusiness {
    async create(user:userDTO){
        const {name, email, password, role} = user

        if(!name || !email || !password){
            throw new Error("Você precisa preencher todos os campos")
        }

        if(
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string"
        ){
            throw new Error("Um campo está inválido")
        }

        if(
            name.length <3 || password.length <6
        ){
            throw new Error("Seu nome deve ter mais de 3 caracteres e sua senha mais de 6")
        }
    }
}

export default UserBusiness