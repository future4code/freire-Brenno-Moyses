import { Request, Response } from "express"
import insertUser from "../data/insertUser";
import {Users} from "../type";
import { userData } from "../type";

export default async function createUser(req: Request, res: Response){
    try{
        const {name, email, password}: Users = req.body
        if(
            !name || !email || !password){

            throw new Error("Todos os campos devem ser preeenchidos")
        }

        const userInsert: userData = {
            id: Date.now().toString(),
            name,
            email,
            password
        }

        const anwser = await insertUser(userInsert)

        res.status(201).send({message: anwser})

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}





