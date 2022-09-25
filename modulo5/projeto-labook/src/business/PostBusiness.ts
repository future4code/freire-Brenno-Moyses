import { PostDatabase } from "../database/PostDatabase"
import { ICreatePostInputDTO, ICreatePostOutputDTO,IDeletePostInputDTO,IGetPostsOutputDTO,Post } from "../models/Post"
import { USER_ROLES } from "../models/User"
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

    public getposts = async(token: string) => {

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error ("Token inválido")
        }

        const postDB = await this.postDatabase.getPosts()

        const posts = postDB.map((post) =>{
            return new Post(post.id,post.content,post.user_id)
        })

        for(let post of posts){
            const postId = post.getId()
            const likes = await this.postDatabase.getLikes(postId)

            post.setLikes(likes)
        }

        console.log(posts)

        const responseType: IGetPostsOutputDTO[] = posts.map((post) => {
            return this.postDatabase.postModelLike(post)
        })

        return responseType

    }

    public deletePost = async(input: IDeletePostInputDTO) => {
        const {token, idPost} = input 

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error ("Token inválido")
        }

        const postDB = await this.postDatabase.findPostById(idPost)

        if(!postDB){
            throw new Error("Post não encontrado")
        }

        if(payload.role === USER_ROLES.NORMAL && postDB.user_id !== payload.id){
            throw new Error("não é posssivel deletar o post de outro usuário")
        }

        await this.postDatabase.deletePost(idPost)

        const response = {
            message: "Post deletado com sucesso"
        }

        return response 
    }

}