import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Auhtenticator";

export async function getProfileId(req:Request, res:Response){
    try{
        const token = req.headers.authorization as string;
        const id = req.params.id

        if(!token){
            res.status(422).send("Esse endpoint exige uma autorização")
        }

        if(!id){
            res.status(422).send("Esse endpoint exige um id")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const userDataBase = new UserDatabase()
        const profileId = await userDataBase.getProfileId(tokenData.id)

        res.status(200).send(profileId)
    }catch(error: any){
        res.status(400).send(error.message)
    }
}