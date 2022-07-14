import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { goToAdminArea } from '../../coordinator'

import { CreationFormContainer } from './style'
import { Inputs } from './style'
import { Buttons } from './style'


function TravelCreation() {

    const navigate = useNavigate()

  return (
    <CreationFormContainer>
        <h1>Criar viagem</h1>
        <Inputs>
            <input placeholder='Nome'></input>
            <select>
                <option>Escolha um planeta</option>
                <option>Mercúrio</option>
                <option>Vênus</option>
                <option>Terra</option>
                <option>Marte</option>
                <option>Jupiter</option>
                <option>Saturno</option>
                <option>Urano</option>
                <option>Netuno</option>
                <option>Plutão</option>
            </select>
            <input id="date" type="date"></input>
            <input placeholder='Descrição'></input>
            <input placeholder='Duração em dias' id='number' type='number'></input>
        </Inputs>
        <Buttons>
                <button onClick={()=>goToAdminArea(navigate)}>Voltar</button>
                <button>Criar</button>
        </Buttons>
    </CreationFormContainer>
  )
}

export default TravelCreation