import { Request, Response } from "express"
import { app } from ".."
import { connection } from "../data/connection"

export const getTypeFilterUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const type = req.params.type
      const users = await selectTypeFilterUsers(type)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
}

async function selectTypeFilterUsers(type: string):Promise<any>{
   const result = await connection ("aula48_exercicio")
   .where ("type", "LIKE", `%${type}%`)

   const recipes = result.map((user:any) => {
         return {
            id: user.id,
            name: user.name,
            email: user.email,
            type: user.type,
         }
      })

   return recipes
}