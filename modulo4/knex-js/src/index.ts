import app from "./app";
import connection from "./connection";

// a) O raw retorna informações solicitadas e informações do banco de dados

app.get("/Actor/:name", async(req,res) => {
    try{
        const name = req.params.name
        const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE name = "${name}"
        `);
        res.status(200).send(result[0][0].count);
    }catch(error:any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});

app.get("/Actor1/:gender", async(req,res): Promise<any> => {
    try{
            const gender = req.params.gender
            const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
            `);
        const count = result[0][0].count
        res.send(count)
    }catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
})