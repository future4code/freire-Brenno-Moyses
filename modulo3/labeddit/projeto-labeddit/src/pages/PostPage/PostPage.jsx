import React from "react"
import { useParams } from "react-router-dom"
import useProtectedPage from "../../hooks/useProtectedPage"
import Cardd from "../../components/Card/Cardd"
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import { StyledTextField } from "./style"
import { PostScreenContainer } from "./style"
import { StyledButton } from "./style"
import useForm from "../../hooks/useForm"
import axios from "axios"


const PostPage = () => {

    let {id} = useParams();

    const posts = useRequestData([], `${BASE_URL}/posts`)

    const comments = useRequestData([], `${BASE_URL}/posts/${id}/comments`)

    const commentCards = comments.map((comment) => {
        return (
            <Cardd post={comment}/>
        )
    })

    const mappedPosts = posts.map((post) =>{
        return post.id === id ? (
            <Cardd key={post.id} post={post}/>
        ) : (
            ""
        );
    });

    const [form,onChange,clear] = useForm({body:""})
    const createComment = () => {
        axios.post(`${BASE_URL}/posts/${id}/comments`, form, {
            headers:{
                Authorization: localStorage.getItem("token")
            } 
        })
        .then((res)=>{
            alert(res.data)
        })
        .catch((err)=>{
            alert(err)
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment() 
        clear()
    }

    useProtectedPage()
    return (
        <PostScreenContainer>
            {mappedPosts}
            <form onSubmit={onSubmitForm}>
            <StyledTextField
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    id="outlined-multiline-static"
                    label="Adicionar comentário"
                    type={"text"}
                    rows={4}
                    margin={"normal"}
                    required
                    placeholder="Escreva seu comentário..."
                    multiline
                />
            <StyledButton 
                variant="contained"
                size={"large"}
                fullWidth
                type="submit"
                >
                    Responder
            </StyledButton>
            </form>
            {commentCards}
        </PostScreenContainer>
    )
}

export default PostPage