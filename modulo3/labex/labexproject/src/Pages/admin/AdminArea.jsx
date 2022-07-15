import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { goToHome } from '../../coordinator'
import { useGetTrips } from '../../hooks/useGetTrips'
import { goToTravelCreation } from '../../coordinator'
import { BASE_URL } from '../../constants/BASE_URL'
import { goToTravelDetails } from '../../coordinator'

import { AdminAreaContainer } from './style'
import { AdminMenu } from './style'
import { Card } from './style'
import { ButtonDetails } from './style'


function AdminArea() {

    const navigate = useNavigate()

    const deleteTravel = (id) => {
        const token = localStorage.getItem("token")
        axios
            .delete(`${BASE_URL}/trips/${id}`,{
                headers:{
                    auth: token
                }
            })
            .then((res)=>{
                console.log(res)
                getAllTrips()
            })
            .catch((err)=>{
                console.log(err)
            });
    }

    const {trips, loading, error} = useGetTrips("/trips")

    // const travel = trips?.trips;
    const getAllTrips = () => {
        if (loading) {
            return <p>...carregando</p>;
        } else if (!loading && error) {
            return <p>{error}</p>;
        } else if (trips && trips.length > 0) {
            return trips.map((trip)=>{
                // console.log(trip.name)
                return (
                    <Card key={trip.id}>
                        <p>{trip.name}</p>
                        <button onClick={()=>deleteTravel(trip.id)}>Lixeira</button>
                    </Card>
                )
            });
        } else if (trips?.length === 0) {
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
        {
            trips.map((trip)=>{
                return (
                    <Card key={trip.id}>
                            <ButtonDetails onClick={()=>goToTravelDetails(navigate, trip.id)}><p>{trip.name}</p></ButtonDetails>
                            <button onClick={()=>deleteTravel(trip.id)}>Lixeira</button>
                    </Card>
                )
            })
        }
    </>
  )
}

export default AdminArea