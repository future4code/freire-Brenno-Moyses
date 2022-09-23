import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostInputDTO } from "../models/Post";
import { Request, Response } from "express";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPost = async (req: Request, res: Response) => {
        try{
            
            const input: ICreatePostInputDTO = {
                token: req.headers.authorization as string,
                content: req.body.content,
            }

            const response = await this.postBusiness.createPost(input)

            res.status(201).send(response)

        }catch(error:any){
            res.status(error.statuscode || 500).send({message:error.message})
        }
    }
}