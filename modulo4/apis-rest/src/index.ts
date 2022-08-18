import express from "express";
import cors from "cors";
import {usersList, user} from "./data";
import { createIndexedAccessTypeNode } from "typescript";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/allUsers", (req, res) => {
    const getAllUsers = usersList.flat(1)
    res.status(200).send(getAllUsers)
})

// a) Método GET 

// b) No caso a entidade é users, usei um /users

app.get("/users/:type", (req, res) => {
    const userType = usersList.filter((user) =>
        user.type === req.params.type
    )
    res.status(200).send(userType)
})

// a) Passei por meio de path params

// b) Usando o ENUM

app.get("/users", (req, res) => {
    const userName: string = req.query.name as string
    try{
        const filterName: user[] = usersList.filter((user) =>
            user.name === userName
        )
        if(!filterName.length) {
            res.statusCode = 401;
            throw new Error ("Nenhum usuário encontrado.")
        }
        res.status(200).send(filterName)
    }catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message})
    }
    
})

app.post("/createUser", (req, res) => {
    const {name, email, type, age} = req.body
    const newList = {
        id: Math.floor(Math.random() * 100),
        name: name,
        email: email,
        type: type,
        age: age
    }
    usersList.push(newList)
    res.status(200).send(usersList)
})

app.put("/changeUser", (req, res) => {
    const {name, email, type, age} = req.body
    const newList = {
        id: Math.floor(Math.random() * 100),
        name: name,
        email: email,
        type: type,
        age: age
    }
    usersList.push(newList)
    res.status(200).send(usersList)
})

// a) Mudou o objetivo do método, o PUT serve para atualizar

// b) Sim pois ele muda algum item já existente, caso não exista ele cria.



