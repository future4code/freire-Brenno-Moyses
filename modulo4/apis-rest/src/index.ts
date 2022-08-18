import express from "express";
import cors from "cors";
import {usersList} from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/users", (req, res) => {
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

