import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"
import { BASE_URL } from '../../constants/BASE_URL'
import { goToAdminArea } from '../../coordinator'
import { Candidates } from './style'
import { AllCandidates } from './style'

import { TravelDetailsContainer } from './style'
import { Details } from './style'


function TravelDetails() {

    const [tripDetails, setTripDetails] = useState([]);

    const params = useParams()

    const navigate = useNavigate()

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
            setTripDetails(res.data.trip)
        }).catch ((err) => {
            console.log(err.data)
        });
    },[params,tripDetails])

    const decideCandidate = (candidateId, choiceApplication) => {
        const token = localStorage.getItem("token");
        const idTrip = tripDetails.id;

        const body = {
            approve: choiceApplication,
        };

        axios.put(`${BASE_URL}/trips/${idTrip}/candidates/${candidateId}/decide`, body,{
            headers:{
                auth:token,
            },
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err)
        });
    };

    const allCandidates = tripDetails.candidates?.map((trip) => {
        return (
            <AllCandidates>
                <p>Nome: {trip.name}</p>
                <p>Profissão: {trip.profession}</p>
                <p>Idade: {trip.age}</p>
                <p>País :{trip.country}</p>
                <p>Texto de candidatura: {trip.applicationText}</p>
                <div>
                <button onClick={()=>decideCandidate(trip.id, true)}>Aprovar</button>
                <button onClick={()=>decideCandidate(trip.id, false)}>Reprovar</button>
                </div>
            </AllCandidates>
        )
    })

    const approvedCandidates = tripDetails.approved?.map((trip) => {
        return (
            <AllCandidates>
                <p>Nome: {trip.name}</p>
            </AllCandidates>
        )
    })

    return (
    <TravelDetailsContainer>
        <Details>
            <h1>{tripDetails && tripDetails.name}</h1>
            <p>Nome: {tripDetails && tripDetails.name}</p>
            <p>Descrição: {tripDetails && tripDetails.description}</p>
            <p>Planeta: {tripDetails && tripDetails.planet}</p>
            <p>Duração: {tripDetails && tripDetails.durationInDays}</p>
            <p>Data: {tripDetails && tripDetails.date}</p>
            <button onClick={()=>goToAdminArea(navigate)}>Voltar</button>
        <Candidates>
            <h1>Candidatos Pendentes</h1>
            {allCandidates}
        </Candidates>
            {approvedCandidates}
        </Details>
    </TravelDetailsContainer>
  )
};

export default TravelDetails