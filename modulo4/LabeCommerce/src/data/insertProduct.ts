import { connection } from "./connection";
import { productData } from "../type";

export default async function insertProduct(insertProduct:productData):Promise<string>{
    
    const {id,name,price,image_url} = insertProduct

    await connection("labecommerce_products")
    .insert({
        id,
        name,
        price,
        image_url
    })

    return "Produto cadastrado com sucesso!"
}
