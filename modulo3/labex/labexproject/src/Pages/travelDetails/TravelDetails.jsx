import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate} from "react-router-dom"

import { TravelDetailsContainer } from './style'


function TravelDetails() {
    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token === null){
            console.log('Não está logado')
        }
    },[])

    useEffect(() => {
        const token = localStorage.getItem('token')

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenno/trip/:id', {
            headers:{
                auth: token
            }
        })
        .then((res) => {
            console.log(res.data)
        }).catch ((err) => {
            console.log(err.data)
        })
    },[])
    
  return (
    <TravelDetailsContainer>
                    Detalhes da viagem!
    </TravelDetailsContainer>
  )
};

export default TravelDetails