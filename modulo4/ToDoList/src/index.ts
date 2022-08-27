import knex from "knex";
import app from "./app";
import connection from "./connection";


app.post('/user', async (req, res) => {
    try{
        await connection("User")
        .insert({
            id: Date.now(),
            nickname: req.body.nickname,
            email: req.body.email,
            name: req.body.name
        })
        res.status(200).send("Usuário criado com sucesso!")
    }catch (error : any){
        res.status(res.statusCode || 500).send({ message: error.message})
    }
})

app.get('/user/:id', async (req, res) => {
    try{
            const result = await connection("User")
            .select("id", "nickname")
            .from("User")
            .where({id: req.params.id});
        res.status(200).send(result)
    }catch (error : any){
        res.status(res.statusCode || 500).send({ message: error.message})
    }
})

app.put('/user/edit/:id', async (req, res) => {
    try{
        await connection("User")
        .update({
            name: req.body.name,
            nickname: req.body.nickname
        })
        .where({id:+req.params.id})
        res.status(200).send("Editado com sucesso")
    }catch (error : any){
        res.status(res.statusCode || 500).send({ message: error.message})
    }
})

app.post('/task', async (req, res) => {
    try{
        await connection("TodoListTask")
        .insert({
            id: Date.now().toString(),
            description: req.body.description,
            title: req.body.title,
            limit_date: req.body.limit_date.split("/").reverse().join("-"),
            creator_user_id: req.body.creator_user_id
        })
        .into("TodoListTask")
        res.status(200).send("Tarefa criada com sucesso!")
    }catch (error : any){
        res.status(res.statusCode || 500).send({ message: error.message})
    }
})