import { Request, Response } from "express"
import { createUser } from "../data/connection";
import { generateId } from "../services/generateID";
import { generateToken } from "../services/generateToken";

export const signupFunction = async (req: Request, res: Response) => {
    try {
        // Item b. Validação do email
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }
    
        // Item c. Validação da senha
        if (!req.body.password || req.body.password.length < 6) {
          throw new Error("Invalid password");
        }
    
        const userData = {
          email: req.body.email,
          password: req.body.password,
        };
    
        const id = generateId();
    
      
        await createUser(id, userData.email, userData.password);
    
        const token = generateToken(
            id,
          );
    
        res.status(200).send({
          token,
        });
      } catch (err: any) {
        res.status(400).send({
          message: err.message,
        });
      }
    };