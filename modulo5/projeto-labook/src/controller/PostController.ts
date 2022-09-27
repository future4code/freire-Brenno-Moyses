import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostInputDTO, IDeletePostInputDTO } from "../models/Post";
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

    public allposts = async (req: Request, res: Response) => {
        try{
            
            const token = req.headers.authorization as string

            const response = await this.postBusiness.getposts(token)

            res.status(200).send(response)

        }catch(error:any){
            res.status(error.statuscode || 500).send({message:error.message})
        }
    }

    public deletePost = async (req: Request, res: Response) => {
        try{
            
            const token = req.headers.authorization as string
            const id = req.params.id

            const input: IDeletePostInputDTO = {
                token,
                idPost: id
            }

            const response = await this.postBusiness.deletePost(input)

            res.status(200).send(response)

        }catch(error:any){
            res.status(error.statuscode || 500).send({message:error.message})
        }
    }
}