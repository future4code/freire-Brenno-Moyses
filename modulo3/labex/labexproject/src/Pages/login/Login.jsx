import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { goToHome } from '../../coordinator'

import { LoginContainer } from './style'
import { LoginElements } from './style'
import { Buttons } from './style'


function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = (event) => {
        event.preventDefault()
        const body = {
            email: email,
            password: password
        }
        console.log(body)
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenno/login', body)
            .then((res) => {
                console.log('Deu certo: ', res.data.token);
                localStorage.setItem('token', res.data.token)
                navigate('/adminarea')
            }).catch((err) => {
                console.log('Deu errado: ', err.data);
            })
    }

    return (
        <LoginContainer>
                    <h1>Login</h1>
                <LoginElements>
                    <form onSubmit={onSubmitLogin}>
                        <input  placeholder='E-mail'
                                onChange={onChangeEmail} 
                                value={email} 
                                type="email"></input>

                        <input  placeholder='Senha'
                                onChange={onChangePassword}
                                value={password}
                                type="password"></input>
                        <Buttons>
                        <button onClick={()=>goToHome(navigate)}>Voltar</button>
                        <button>Entrar</button>
                    </Buttons>
                    </form> 
                </LoginElements>
        </LoginContainer>
    )
}

export default Login