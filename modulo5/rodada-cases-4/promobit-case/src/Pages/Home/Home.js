import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FilterMenu } from "./styled";
import Descrição from "../../img/Descrição.png"
import CardFilm from "../../Components/CardFilm/CardFilm";
import { Films } from "./styled";

const Home = (props) => {
    const {films, setFilms }= props

    const FilterFilms = films.results?.map((film) => {
        return <CardFilm
            id = {film.id}
            title = {film.title}
            backdrop = {film.backdrop_path}
            data = {film.release_date}
        />
    })

    console.log(films)

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
