import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate} from "react-router-dom"

import { FormContainer } from './style'
import { Inputs } from './style'
import { Buttons } from './style'

function TravelForm() {

    const navigate = useNavigate()

    const goToHome = () => {
        navigate(-1)
    }
    
    return (
        <FormContainer>
            <h1>Inscreva-se para uma viagem</h1>
            <Inputs>
                <select>
                    <option>Escolha uma viagem</option>
                </select>
                    <input placeholder='Nome'></input>
                    <input placeholder='Idade'></input>
                    <input placeholder='Texto de candidatura'></input>
                    <input placeholder='Profissão'></input>
                <select>
                    <option>Escolha um país</option>
                </select>
            </Inputs>
            <Buttons>
                <button onClick={goToHome}>Voltar</button>
                <button>Enviar</button>
            </Buttons>
        </FormContainer>
    )
}

export default TravelForm