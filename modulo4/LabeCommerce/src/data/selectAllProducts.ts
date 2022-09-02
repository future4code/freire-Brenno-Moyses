import { connection } from "./connection";
import { productData } from "../type";

const typeProduct = (product: any) => {
    const createProduct: productData = {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url
    }

    return createProduct
}

export default async function selectAllProducts(): Promise<productData[] | undefined>{

    const result = await connection("labecommerce_products")

    const allProductType = result.map((product) => {
        return typeProduct(product)
    })

    return allProductType

}