
import React from "react"
import { StyledTextField } from "../LoginPage/style"
import { RegistrationContainer } from "./style"
import { InputsContainerRegistration } from "./style"
import { TextContainer } from "./style"
import {Checkbox} from "@mui/material"
import { CheckBoxContainer } from "./style"
import { RegistrationButton } from "./style"
import useForm from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { signUp } from "../../services/users"
import useUnProtectedPage from "../../hooks/useUnprotectedPage"



const RegistrationPage = () => {
    const navigate = useNavigate()
    useUnProtectedPage()
    const [form, onChange, clear] = useForm({username:'', email:'', password:''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate)
    }

    return (
        <RegistrationContainer>
            <form onSubmit={onSubmitForm}>
            <h1>Olá, boas vindas ao LabEddit ;)</h1>
                <InputsContainerRegistration>
                    <StyledTextField
                    value={form.username}
                    onChange={onChange}
                    name={'username'}
                    variant={'outlined'}
                    label={"Nome"}
                    margin={"normal"}
                    fullWidth
                    required
                    type={"text"}
                    />
                    <StyledTextField
                    onChange={onChange}
                    value={form.email}
                    name={'email'}
                    variant={'outlined'}
                    label={"E-mail"}
                    margin={"normal"}
                    fullWidth
                    required
                    type={"email"}
                    />
                    <StyledTextField
                    onChange={onChange}
                    value={form.password}
                    name={'password'}
                    variant={'outlined'}
                    label={"Senha"}
                    margin={"normal"}
                    fullWidth
                    required
                    type={"password"}
                    />
                </InputsContainerRegistration>
                <TextContainer>
                    <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
                </TextContainer>
                <CheckBoxContainer>
                    <Checkbox/>
                    <label>Eu concordo em receber emails sobre coisas legais no Labeddit</label>
                </CheckBoxContainer>
                <RegistrationButton>
                    <button
                    type={"submit"}
                    >Cadastrar
                    </button>
                </RegistrationButton>
            </form>
        </RegistrationContainer>
    )
}

export default RegistrationPage