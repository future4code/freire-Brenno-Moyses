import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import { goToFeed } from '../routes/coordinator'

export const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(navigate)
    })
    .catch((err)=>alert("Erro no login"))
}

export const signUp = (body, clear, navigate) => {
    console.log(body)
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(navigate)
    })
    .catch((err) => alert("Erro no cadastro"))
}