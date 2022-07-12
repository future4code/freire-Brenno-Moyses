import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { goToHome, goToTravelForm } from '../../coordinator'

import { ListContainer } from './style'
import { Buttons } from './style'
import { Card } from './style'

function TravelList() {

    const navigate = useNavigate()


    return (
        <ListContainer>
            <Buttons>
                <button onClick={()=>goToHome(navigate)}>Voltar</button>
                <button onClick={()=>goToTravelForm(navigate)}>Inscreva-se</button>
            </Buttons>
            <h1>Lista de Viagens🚀</h1>
            <Card>
                <p>Nome:</p>
                <p>Descrição:</p>
                <p>Planeta:</p>
                <p>Duração:</p>
                <p>Data:</p>
            </Card>
        </ListContainer>
    )
}

export default TravelList