import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate} from "react-router-dom"

import { TravelDetailsContainer } from './style'


function style() {


    // useEffect(() => {

    //     axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/brenno/trip/6SXzNsMEhBrcone1UmlG')
    //     .then((res) => {
    //         console.log(res.data)
    //     }).catch ((err) => {
    //         console.log(err.data)
    //     })
    // },[])
    
  return (
    <TravelDetailsContainer>
                <h1>OI</h1>
    </TravelDetailsContainer>
  )
};

export default style