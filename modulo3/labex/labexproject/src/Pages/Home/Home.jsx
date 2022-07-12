import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { goToTravelList } from '../../coordinator'

import { HomeContainer } from './style'
import { Elements } from './style'
import { Buttons } from './style'

function Home() {

    const navigate = useNavigate()

    return (
    <HomeContainer>
                <h1>LabeX</h1>
                    <Buttons>
                        <button onClick={() => goToTravelList(navigate)}>Ver Viagens</button>
                        <button>Área de admin</button>
                    </Buttons>
    </HomeContainer>
    )
}

export default Home