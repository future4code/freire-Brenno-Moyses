import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios"

import { ListContainer } from './style'
import { Buttons } from './style'
import { Card } from './style'

function TravelList(props) {
    return (
        <ListContainer>
            <Buttons>
                <button onClick={props.goToHome}>Voltar</button>
                <button onClick={props.goToTravelForm}>Inscreva-se</button>
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