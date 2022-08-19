// no index.ts:
import { accountsList, account } from "./data";
import express, { Express } from "express";
import cors from "cors";


const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
       console.log(`Server is running in http://localhost:3003`);
});

app.post("/accounts/addAccount", (req, res) => {
    const { name, cpf, birthdate } = req.body
    try{const userAge = new Date().getFullYear() - birthdate.split("/")[2]
    if (userAge < 18) {
        res.statusCode = 401
        throw new Error (
            "Você precisar ter 18 anos ou mais."
        )
    }
        const newList = {
        id: Math.floor(Math.random() * 100),
        name: name,
        cpf: cpf,
        birthdate: birthdate,
    }
    accountsList.push(newList)
    res.status(200).send(newList)
    }catch (error:any){
        res.status(res.statusCode || 500).send({ message: error.message})
    }
    
})

app.get("/accounts", (req, res) => {
    const allAccounts = accountsList.flat(1)
    res.status(200).send(allAccounts)
})