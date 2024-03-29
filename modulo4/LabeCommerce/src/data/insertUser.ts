import { userData } from "../type";
import { connection } from "./connection";

export default async function insertUser(insertUser:userData):Promise<string>{

    const {id,name,email,password} = insertUser

    await connection("labecommerce_users")
    .insert({
        id,
        name,
        email,
        password
    })

    return "Usuário cadastrado com sucesso!"
}