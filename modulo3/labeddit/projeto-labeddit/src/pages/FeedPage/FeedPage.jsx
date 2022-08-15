import React from "react"
import { InputsContainerFeed } from "./style"
import { StyledTextField } from "./style"
import { StyledTextField2 } from "./style"
import { StyledButton } from "./style"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import Cardd from '../../components/Card/Cardd'
import { FeedContainer } from "./style"
import useForm from "../../hooks/useForm"
import axios from "axios"

const FeedPage = () => {

    useProtectedPage()
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const postCards = posts.map((post) => {
        return (
            <Cardd post={post}/>
        )
    })

    const [form, onChange, clear] = useForm({title: "", body: ""})

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) =>{
            alert(res.data)
            clear()
        })
        .catch((err) =>alert(err.response.message))
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost()
    }

    return (
            <FeedContainer>
            <form onSubmit={onSubmitForm}>
            <InputsContainerFeed>
            <StyledTextField
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"Título do post"}
                    margin={"normal"}
                    required
                    type={"text"}
                />
                <StyledTextField2
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    id="outlined-multiline-static"
                    label="Postagem"
                    type={"text"}
                    rows={4}
                    required
                    placeholder="Escreva seu post..."
                    multiline
                />
                <StyledButton 
                variant="contained"
                size={"large"}
                fullWidth
                type="submit"
                >
                    Postar
                </StyledButton>
                <hr/>
            </InputsContainerFeed>
            </form>
            {postCards}
        </FeedContainer>
    )
}

export default FeedPage