import express from "express";

const app = express();

app.use(express.json());

app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

// app.get("/ping", (req, res) => {          
//     res.send("Pong! 🏓")
// })

type tasks = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const tasksList: tasks [] = [
    {
        userId: 20,
        id: 1,
        title: "Lavar o carro",
        completed: false  
    },
    {
        userId: 21,
        id: 2,
        title: "Arrumar a casa",
        completed: true  
    },
    {
        userId: 22,
        id: 3,
        title: "Passear com o cachorro",
        completed: false  
    },
    {
        userId: 23,
        id: 4,
        title: "Fazer o almoço",
        completed: true  
    }
]

app.get('/taskStatus', (req, res) => {
    const listStatus = req.query.completed
    const tasks = tasksList.filter((task) => {
        return task.completed.toString() === listStatus
    })
    res.status(200).send({tasks})
})

