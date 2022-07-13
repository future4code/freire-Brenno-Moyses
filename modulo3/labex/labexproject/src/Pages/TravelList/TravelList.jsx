import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { goToHome, goToTravelForm } from '../../coordinator'
import { useGetTrips } from '../../hooks/useGetTrips'

import { ListContainer } from './style'
import { Buttons } from './style'
import { Card } from './style'

function TravelList() {

    const navigate = useNavigate()

    const {trips, loading, error} = useGetTrips("/trips")

    const travel = trips?.trips;
    console.log(travel)
    const getAllTrips = () => {
        if (loading) {
            return <p>...carregando</p>;
        } else if (!loading && error) {
            return <p>{error}</p>;
        } else if (travel && travel.length > 0) {
            return travel.map((trip)=>{
                console.log(trip.name)
                return (
                    <Card>
                        <div className='teste'>
                            <p key={trip.id}>Nome: {trip.name}</p>
                            <p>Descrição: {trip.description}</p>
                            <p>Planeta: {trip.planet}</p>
                            <p>Duração: {trip.durationInDays}</p>
                            <p>Data: {trip.date}</p>
                        </div>
                    </Card>
                )
            });
        } else if (travel?.length === 0) {
            return <p>Nenhuma viagem existente</p>;
        }
    };

    return (
        <ListContainer>
            <Buttons>
                <button onClick={()=>goToHome(navigate)}>Voltar</button>
                <button onClick={()=>goToTravelForm(navigate)}>Inscreva-se</button>
            </Buttons>
            <h1>Lista de Viagens🚀</h1>
                {getAllTrips()}
        </ListContainer>
    )
}

export default TravelList