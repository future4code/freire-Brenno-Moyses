import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios"

import { HomeContainer } from './style'
import { Elements } from './style'
import { Buttons } from './style'


function Home(props) {
    return (
    <HomeContainer>
                <h1>LabeX</h1>
                    <Buttons>
                        <button onClick={props.goToList}>Ver Viagens</button>
                        <button>Área de admin</button>
                    </Buttons>
    </HomeContainer>
    )
}

export default Home