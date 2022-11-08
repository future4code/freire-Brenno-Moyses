import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FilterMenu } from "./styled";
import Descrição from "../../img/Descrição.png"
import CardFilm from "../../Components/CardFilm/CardFilm";
import { Films } from "./styled";
import axios from "axios";
import { BASE_URL, KEY_API } from "../../Constants/constants";

const Home = () => {
const [films, setFilms] = useState([]);

    useEffect(() => {
        axios
        .get(`${BASE_URL}/movie/popular?api_key=${KEY_API}&language=en-US&page=1`)
            .then((res) => {
                setFilms(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })   
    },[setFilms])

    const FilterFilms = films.results?.map((film) => {
        return <CardFilm
            key = {film.id}
            id = {film.id}
            title = {film.title}
            backdrop = {film.backdrop_path}
            data = {film.release_date}
        />
    })

    return (
        <div>
            <FilterMenu>
                <img src={Descrição} />
            </FilterMenu>
            <Films>
            {FilterFilms}
            </Films>
        </div>
    )
}

export default Home
