import {Request, Response} from "express"
import { UserDatabase } from "../data/UserDatabase"
import { User } from "../entities/User"
import { Authenticator } from "../services/Auhtenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export async function login (req: Request, res: Response) {
    try{
        const {email,password} = req.body

        if(!email || !password) {
            res.status(422).send("Insira corretamente todas informações")
        }

        const UserDataBase = new UserDatabase()
        const user = await UserDataBase.findUserByEmail(email)
        
        if(!user){
            res.status(409).send("Esse email não está cadastrado"); 
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = hashManager.compare(password, user.getPassword())

        if(!passwordIsCorrect){
            res.status(401).send("Email ou senha incorretos")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({id: user.getId()})

        res.status(200).send({message: "Usuário logado com sucesso", token})
    }catch(error: any){
    res.status(400).send(error.message)
    }
}