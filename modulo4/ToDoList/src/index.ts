import knex from "knex";
import app from "./app";
import connection from "./connection";
import moment from 'moment';


app.post('/user', async (req, res) => {
    try{
        if(
            !req.body.name ||
            !req.body.email ||
            !req.body.nickname
        ) {
        res
            .status (400)
            .send("Preencha todos os campos")
        }
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
        if(
            !req.body.name ||
            !req.body.nickname  
        ) {
        res
            .status (400)
            .send("Preencha todos os campos")
        }
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
    try{ if (
        !req.body.description ||
        !req.body.title ||
        !req.body.limit_date ||
        !req.body.creator_user_id
    ) {

    }
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

app.get('/task/:id', async (req, res) => {
    try{
        const result = await connection("TodoListTask")
        .where("TodoListTask.id", req.params.id)
        .join("User", "TodoListTask.creator_user_id", "User.id")
        .select("TodoListTask.id", "title", "description", "limit_date", "status", "User.nickname")

        const formatDate = moment(result[0].limit_date, 'YYYY-MM-DD').format('DD/MM/YYYY')

        res.status(200).send({
            id: result[0].id,
            title: result[0].title,
            description: result[0].description,
            limit_date: formatDate,
            status: result[0].status,
            nickname: result[0].nickname,
        })
    }catch (error : any){
        res.status(res.statusCode || 500).send({ message: error.message})
    }
})

