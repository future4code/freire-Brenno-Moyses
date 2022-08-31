import { Request, Response } from "express"
import { getFullAddress } from "./getAddress"
import { connection } from "../data/connection"


export const insertAdress = async (req: Request, res: Response) => {
    try{
        const {cep, numero, complemento} = req.body

        const address = await getFullAddress(cep)

        await connection("aula48_endereco")
        .insert({
            id_user: Date.now(),
            cep,
            numero,
            logradouro: address.logradouro,
            bairro: address.bairro,
            complemento,
            cidade: address.localidade,
            estado: address.uf
        })
        res.status(200).send("Usuário cadastrado")

    } catch (error: any){
        res.status(500).send(error.message)
    }
    
}