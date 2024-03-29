export interface IPostDB {
    id: string,
    content: string,
    user_id: string
}

export interface IGetPostsOutputDTO {
    id: string,
    content: string,
    userId: string,
    like: number
}

export interface ILikeDB {
    id: string,
    post_id: string,
    user_id: string
}

export interface ICreatePostInputDTO{
    token: string,
    content: string
}

export interface ICreatePostOutputDTO {
    message:string,
    post: Post
}

export interface IDeletePostInputDTO {
    token: string,
    idPost: string
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
        private likes: number = 0
    ) {}


    public getId = () => {
        return this.id
    }

    public getContent = () => {
        return this.content
    }

    public getUserId = () => {
        return this.userId
    }

    public getLikes = (): number => {
        return this.likes
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setContent = (newContent: string) => {
        this.content = newContent
    }

    public setUserId = (newUserId: string) => {
        this.userId = newUserId
    }

    public setLikes = (newLikes: number) => {
        this.likes = newLikes
    }
}
