import express from "express";

const app = express();

app.use(express.json());

app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});

// app.get("/users", (req, res) => {          
//     res.send("Hello from Express")
// })

type user = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

const usersList: user [] = [
    {
        id: 23,
        name: "Brenno",
        phone: 21980295432,
        email: "BrennoBoechat@hotmail.com",
        website: "PlayfutebolHD"
    },
    {
        id: 24,
        name: "Tim",
        phone: 219872934355,
        email: "Tim@hotmail.com",
        website: "FutMax"
    },
    {
        id: 25,
        name: "Zezo",
        phone: 215555934355,
        email: "Zezo@hotmail.com",
        website: "Premiere"
    }
]

app.get('/users',(req,res)=>{
    const arrayUsers = usersList.flat(1)
    res.status(200).send(arrayUsers)
})

type post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// Prefiro criar separado, para ficar de forma mais clara e dividida.
const postsList: post [] =[    
    {
        id: 10,
        title: "Jogos de Futebol",
        body: "Flamengo x Sport",
        userId: 23 
    },
    {
        id: 11,
        title: "Jogos de Futebol HD",
        body: "Flamengo x Vasco",
        userId: 24 
    },
    {
        id: 12,
        title: "Jogos de Futebol HD+",
        body: "Flamengo x Fluminense",
        userId: 25 
    }
]

app.get('/posts',(req,res)=>{
    const arrayPosts = postsList.flat(1)
    res.status(200).send(arrayPosts)
})

// app.get('/posts/:userId',(req,res)=>{
//     const individualPost = postsList.map(par=>{
//         if()
//     })
// })

