import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostInputDTO, ICreatePostOutputDTO, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createPost = async(input: ICreatePostInputDTO) => {
        const {token,content} = input

        console.log(input)

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload){
            throw new Error ("Token inválido")
        }

        if(content.length <1){
            throw new Error ("A postagem deve ter mais de um caractere")
        }

        const id = this.idGenerator.generate()

        const post = new Post(id,content,payload.id)

        await this.postDatabase.createPost(post)

        const response: ICreatePostOutputDTO = {
            message: "Post criado com sucesso",
            post
        }

        return response
    }

}