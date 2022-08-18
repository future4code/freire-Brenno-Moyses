import { productsList } from "./data";

import { product } from "./data";

import express, { response } from "express";

const app = express();

app.use(express.json());

app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

app.get("/teste", (req, res) => {          
    res.send("A API está funcionando!")
})

app.get("/products/getAllProducts", (req, res) => {
    const allProductsList = productsList.flat(1)
    res.status(200).send(allProductsList)
})

app.post("/products/createProduct", (req, res) => {
    const {name, price} = req.body

    try{ if(!name && !price){
        response.statusCode = 401;
        throw new Error("Os dados 'name' e 'price' não foram recebidos.")
    }
    if(name !== name.toString()){
        response.statusCode = 401;
        throw new Error("O dado 'name' precisa ser uma string.")
    }
    if(price !== Number(price)){
        response.statusCode = 401;
        throw new Error("O dado 'price' precisa ser um number.")
    }
    if(price <= 0){
        response.statusCode = 401;
        throw new Error("O dado 'price' precisa ser maior ou igual à 0.")
    }

    const newList ={
        id: Math.floor(Math.random() * 100).toString(),
        name: name,
        price: price
    } 
    productsList.push(newList)
    res.status(200).send(productsList)
    }catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message})
    } 
})

app.put("/products/changePrice/:id", (req, res) => {
    const price = req.body.price
    const id = req.params.id;

    try{ if(!price){
        response.statusCode = 401;
        throw new Error ("O dado 'price' não foi recebido.")
    }
    if(price !== Number(price)){
        response.statusCode = 401;
        throw new Error ("O dado 'price' precisa ser um number.")
    }
    if(price <= 0){
        response.statusCode = 401;
        throw new Error ("O dado 'price' precisa ser maior ou igual à 0.")
    }

    const filterId = productsList.filter((product) =>{
        return product.id === id;
    })
    if(!filterId.length){
        response.statusCode = 404;
        throw new Error ("O produto não foi encontrado.")
    }

        const newList: product[] = productsList.map((item) =>{
        if(item.id === (req.params.id)){
            return {...item, price:req.body.price}
        }
        return item
    })
    res.send(newList)
    }catch (error: any){
        res.status(res.statusCode || 500).send({ message: error.message})
    }
})

app.delete("/products/deleteProduct/:id", (req, res) => {
    const id = req.params.id
    try{const filterId = productsList.findIndex((product) => {
            return product.id === id;
    });
    if(filterId < 0){
        response.statusCode = 404;
        throw new Error ("O produto não foi encontrado.")
    }
        
        const deletProduct = productsList.filter((item) =>{
            return item.id !== id
        })
        res.send(deletProduct)
    }catch (error: any){
        res.status(res.statusCode || 500).send({ message: error.message });
    }
})




