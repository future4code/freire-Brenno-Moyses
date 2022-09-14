import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

export const createUser = async (id: string, email:string, password: string) => {
    await connection 
    .insert({
        id,
        email,
        password,
    })
    .into("UserAccount")
}

const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("UserAccount")
      .where({ email });
 
    return result[0];
   }