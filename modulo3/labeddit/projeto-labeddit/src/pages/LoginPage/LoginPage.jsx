import React from "react"
import { LoginContainer } from "./style"
import LogoLogin from '../../assets/img/LogoLogin.png'
import {useNavigate} from "react-router-dom"
import { InputsContainer } from "./style"
import { LogoImage } from "./style"
import { TextField } from "@mui/material"
import useForm from "../../hooks/useForm"
import { StyledTextField } from "./style"
import { ButtonsContainer } from "./style"
import Stack from "@mui/material/Stack";
import { StyledButton } from "./style"
import {Button} from "@mui/material"
import { goToRegistration } from "../../routes/coordinator"
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
import { login } from "../../services/users"
import useUnProtectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = () => {
    useUnProtectedPage()
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
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
                    required
                    fullWidth
                    type={"email"}
                />
                <StyledTextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    margin={"normal"}
                    required
                    fullWidth
                    type={"password"}
                />
            </InputsContainer>
                <Stack direction="column" spacing={2}>
                    <StyledButton
                        type={"submit"}
                        variant={"contained"}
                        size={"large"}
                        sx={{ borderRadius: 25 }}
                        fullWidth
                    >
                        Continuar
                    </StyledButton>
                    <hr />
                    <Button
                        onClick={() => goToRegistration(navigate)}
                        type={"submit"}
                        variant={"outlined"}
                        color={"secondary"}
                        size={"large"}
                        sx={{ borderRadius: 25 }}
                        fullWidth
                    >
                        Crie uma conta!
                    </Button>
                </Stack>
            </form>
        </LoginContainer>
    )
}

export default LoginPage