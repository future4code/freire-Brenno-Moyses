import axios from "axios"
import { Request, Response } from "express"
import { Address } from "../types/typeAddress"

export const getFullAddress = async (cep: string) => {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return result.data
}


export const getAddress = async (req: Request, res: Response) => {
    try{
        const cep = req.params.cep

        const result = await getFullAddress(cep)

        const address: Address = {
            logradouro: result.logradouro,
            bairro: result.bairro,
            cidade: result.localidade,
            estado: result.uf
        }
        
        res.send(address)

    } catch (error: any){
        res.status(500).send(error.message)
    }
}