import { Request, Response } from "express"
import insertProduct from "../data/insertProduct"
import { productData, Products } from "../type"

export default async function createProduct(req: Request, res: Response){
    try{
        const {name, price, image_url}: Products = req.body
        if(
            !name || !price || !image_url
        ){
            throw new Error("Todos os campos devem ser preeenchidos")
        }

        const productInsert: productData = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        const anwser = await insertProduct(productInsert)

        console.log(anwser)

        res.status(201).send({message: anwser})

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}