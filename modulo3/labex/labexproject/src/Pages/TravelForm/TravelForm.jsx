import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { goToTravelList } from '../../coordinator'


import { FormContainer } from './style'
import { Buttons } from './style'

function TravelForm() {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [applicationText, setApplicationText] = useState("");
    const [profession, setProfession] = useState("");
    const [country, setCountry] = useState("");

    const getName = (event) => {
        setName(event.target.value);
    }

    const getAge = (event) => {
        setAge(event.target.value);
    }

    const getApplicationText = (event) => {
        setApplicationText(event.target.value);
    }

    const getProfession = (event) => {
        setProfession(event.target.value);
    }

    const getCountry = (event) => {
        setCountry(event.target.value);
    }

    const candidateApplicant = (event) => {
        event.preventDefault()
        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country,
        }
        console.log(body)
    }

    
    return (
        <FormContainer>
            <h1>Inscreva-se para uma viagem</h1>
            <form onSubmit={candidateApplicant}>
            <select>
                <option>Escolha uma viagem</option>
                    </select>
                        <input onChange={getName} placeholder='Nome'></input>
                        <input onChange={getAge} placeholder='Idade'></input>
                        <input onChange={getApplicationText} placeholder='Texto de candidatura'></input>
                        <input onChange={getProfession} placeholder='Profissão'></input>
                    <select>
                <option onChange={getCountry}>Escolha um país</option>
                </select>
                <Buttons>
                <button onClick={()=>goToTravelList(navigate)}>Voltar</button>
                <button>Enviar</button>
                </Buttons>
            </form>
        </FormContainer>
    )
}

export default TravelForm