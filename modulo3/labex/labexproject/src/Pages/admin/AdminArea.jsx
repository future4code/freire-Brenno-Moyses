import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { goToHome } from '../../coordinator'
import { useGetTrips } from '../../hooks/useGetTrips'
import { goToTravelCreation } from '../../coordinator'

import { AdminAreaContainer } from './style'
import { AdminMenu } from './style'
import { Card } from './style'


function AdminArea() {

    const navigate = useNavigate()

    const {trips, loading, error} = useGetTrips("/trips")

    const travel = trips?.trips;
    const getAllTrips = () => {
        if (loading) {
            return <p>...carregando</p>;
        } else if (!loading && error) {
            return <p>{error}</p>;
        } else if (travel && travel.length > 0) {
            return travel.map((trip)=>{
                console.log(trip.name)
                return (
                    <Card key={trip.id}>
                        <p>{trip.name}</p>
                        <button>Lixeira</button>
                    </Card>
                )
            });
        } else if (travel?.length === 0) {
    return <p>Nenhuma viagem existente</p>;
    }
}; 

  return (
    <>
    <AdminAreaContainer>
        <AdminMenu>
            <h1>Painel Administrativo</h1>
            <button onClick={()=>goToHome(navigate)}>Voltar</button>
            <button onClick={()=>goToTravelCreation(navigate)}>Criar viagem</button>
            <button>Logout</button>
        </AdminMenu>
    </AdminAreaContainer>
        {getAllTrips()}
    </>
  )
}

export default AdminArea