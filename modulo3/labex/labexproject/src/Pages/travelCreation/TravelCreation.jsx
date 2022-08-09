import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { goToAdminArea } from '../../coordinator'
import { BASE_URL } from '../../constants/BASE_URL'



import { CreationFormContainer } from './style'
import { Inputs } from './style'
import { Buttons } from './style'


function TravelCreation() {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [planet, setPlanet] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [days, setDays] = useState("");


    const getName = (event) => {
        setName(event.target.value);
    }

    const getPlanet = (event) => {
        setPlanet(event.target.value);
    }

    const getDate = (event) => {
        setDate(event.target.value);
    }

    const getDescription = (event) => {
        setDescription(event.target.value);
    }

    const getDays = (event) => {
        setDays(event.target.value);
    }

    const createTravel = (event) => {
        event.preventDefault()
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: days,
            
        }
        const token = localStorage.getItem("token")
        axios
            .post(`${BASE_URL}${"/trips"}`, body,{
                headers:{
                    auth: token
                }
            })
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            });
    }


    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token === null){
            console.log('Não está logado')
        }
    },[])

    
    return (
    <CreationFormContainer>
        <h1>Criar viagem</h1>
        <Inputs>
            <form onSubmit={createTravel}>
                <input onChange={getName} value={name} placeholder='Nome'></input>
                <select onChange={getPlanet} value={planet}>
                <option hidden>Escolha um planeta</option>
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
            <input onChange={getDate} value={date} id="date" type="date"></input>
            <input onChange={getDescription} value={description} placeholder='Descrição'></input>
            <input onChange={getDays} value={days} placeholder='Duração em dias' id='number' type='number'></input>
            <Buttons>
                <button onClick={()=>goToAdminArea(navigate)}>Voltar</button>
                <button>Criar</button>
            </Buttons>
            </form>
        </Inputs>
    </CreationFormContainer>
  )
}

export default TravelCreation