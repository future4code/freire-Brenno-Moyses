import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Auhtenticator";

export async function getRecipe(req:Request, res:Response){
    try{
        const token = req.headers.authorization as string;
        const recipeId = req.params.id

        console.log(recipeId)

        if(!token){
            res.status(422).send("Esse endpoint exige uma autorização")
        }

        if(!recipeId){
            res.status(422).send("Esse endpoint exige um id")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)
        console.log(tokenData.id)

        const userDataBase = new UserDatabase()
        const recipe = await userDataBase.getRecipe(recipeId)

        res.status(200).send(recipe)
    }catch(error: any){
        res.status(400).send(error.message)
    }
}