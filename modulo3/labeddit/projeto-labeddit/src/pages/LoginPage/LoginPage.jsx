import React from "react"
import { LoginContainer } from "./style"
import LogoLogin from '../../assets/img/LogoLogin.png'
import { InputsContainer } from "./style"
import { LogoImage } from "./style"
import { TextField } from "@mui/material"
import useForm from "../../hooks/useForm"
import { StyledTextField } from "./style"
import { ButtonsContainer } from "./style"

const LoginPage = () => {
    const [form, onChange, clear] = useForm({email: "", password: ""})

    const onSubmitForm = () => {

    }

    return (
        <LoginContainer>
            <LogoImage>
                <img src={LogoLogin}/>
                <p>O projeto de rede social da Labenu</p>
            </LogoImage>
            <form onSubmit={onSubmitForm}>
            <InputsContainer>
                <StyledTextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    margin={"normal"}
                    fullWidth
                    required
                    type={"email"}
                />
                <StyledTextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    margin={"normal"}
                    required
                    type={"password"}
                />
                <ButtonsContainer>
                    <button>Continuar</button>
                </ButtonsContainer>
            </InputsContainer>
            </form>
        </LoginContainer>
    )
}

export default LoginPage