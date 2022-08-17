import { productsList } from "./data";

import { product } from "./data";

import express from "express";

const app = express();

app.use(express.json());

app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

app.get("/teste", (req, res) => {          
    res.send("A API está funcionando!")
})

app.get("/getAllProducts", (req, res) => {
    const allProductsList = productsList.flat(1)
    res.status(200).send(allProductsList)
})

app.post("/createProduct", (req, res) => {
    const {name, price} = req.body
    const newList ={
        id: Math.floor(Math.random() * 100).toString(),
        name: name,
        price: price
    } 
    productsList.push(newList)
    res.status(200).send(productsList)
})

app.put("/products/changePrice/:id", (req, res) => {
    const newList: product[] = productsList.map((item) =>{
        if(item.id === (req.params.id)){
            return {...item, price:req.body.price}
        }
        return item
    })
    res.send(newList)
})

// app.delete("products/:id", (req, res) =>{
//     const newList = productsList.map(product =>{
//         if(product.id === req.params.id){
//             return productsList
//         }
//     })
//     res.send(newList)
// })

