import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Auhtenticator";

export async function getProfile(req: Request, res:Response){
    try{
        const token = req.headers.authorization as string;

        if (!token){
            res.status(422).send("Esse endpoint exige uma autorização")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const userDataBase = new UserDatabase()
        const users = await userDataBase.getProfile(tokenData.id)

        console.log(users)

        res.status(200).send(users)
    }catch(error: any){
        res.status(400).send(error.message)
    }
}