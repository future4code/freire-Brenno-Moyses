import {Request, Response} from "express"
import { UserDatabase } from "../data/UserDatabase"
import { User } from "../entities/User"
import { Authenticator } from "../services/Auhtenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export async function signup (req: Request, res: Response) {
    try{
        const {name,email,password} = req.body

        if(!name || !email || !password) {
            res.status(422).send("Insira corretamente todas informações")
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate()

        const UserDataBase = new UserDatabase()
        const user = await UserDataBase.findUserById(id)

        if(user){
            res.status(409).send("Esse id já existe"); 
        }
        
        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword)
        await UserDataBase.createUser(newUser);

        const authenticator = new Authenticator()
        const token = authenticator.generate({id})

        res.status(200).send({message: "Usuário criado com sucesso", token})
    }catch(error: any){
    res.status(400).send(error.message)
    }
}