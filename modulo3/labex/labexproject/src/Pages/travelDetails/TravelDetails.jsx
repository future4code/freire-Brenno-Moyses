import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"
import { BASE_URL } from '../../constants/BASE_URL'

import { TravelDetailsContainer } from './style'
import { Details } from './style'


function TravelDetails() {

    const [tripDetails, setTripDetails] = useState([]);

    const params = useParams()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token === null){
            console.log('Não está logado')
        }
    },[])


    useEffect(() =>{
        const token = localStorage.getItem('token')

        axios.get(`${BASE_URL}/trip/${params.id}`, {
            headers:{
                auth: token
            }
        })
        .then((res) => {
            console.log(res.data)
            setTripDetails(res.data)
        }).catch ((err) => {
            console.log(err.data)
        });
    },[params])
    
  return (
    <TravelDetailsContainer>
        <Details>
        <h1>{tripDetails.trip.name}</h1>
        <ul>
            <li>Nome: {tripDetails.trip.name}</li>
            <li>Descrição: {tripDetails.trip.description}</li>
            <li>Planeta: {tripDetails.trip.planet}</li>
            <li>Duração: {tripDetails.trip.durationInDays}</li>
            <li>Data: {tripDetails.trip.date}</li>
        </ul>
        </Details>
    </TravelDetailsContainer>
  )
};

export default TravelDetails