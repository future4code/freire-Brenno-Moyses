import {Request, Response} from "express"
import { Authenticator } from "../services/Auhtenticator";
import { IdGenerator } from "../services/IdGenerator";
import moment from 'moment'
import { Recipe } from "../entities/Recipe";
import { UserDatabase } from "../data/UserDatabase";

export async function createRecipe (req: Request, res:Response) {
    try{
        const token = req.headers.authorization
        const {title, description} = req.body

        if(!title || !description) {
            throw new Error("Você precisa preencher todos os campos!");
        }

        if(!token) {
            throw new Error("Você precisa preencher o token");
        }

        const authenticator = new Authenticator();
        const payload = authenticator.getTokenData(token);

        if (!payload) {
            throw new Error("Autorização insuficiente!");
        }

        const generateId = new IdGenerator();
        const id = generateId.generate();

        const createdAt = moment(new Date()).format('YYYY-MM-DD');
        const recipe = new Recipe(id, title, description, createdAt);
        await new UserDatabase().createRecipe(recipe);

        res.status(200).send({message: "Receita criada com sucesso!"})

    }catch(error: any){
        res.status(400).send(error.message)
    }
};