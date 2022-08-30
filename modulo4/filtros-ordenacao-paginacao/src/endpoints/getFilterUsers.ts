import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"


export const getFilterUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const name = req.query.name as string
      const users = await selectFilterUsers(name)
      

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
}

   async function selectFilterUsers(name: string):Promise<any> {
   const result = await connection.raw(`
      SELECT *
      FROM aula48_exercicio
      WHERE name LIKE '%${name}%'
   `)

   return result[0]
}