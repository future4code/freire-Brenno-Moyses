import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FilterMenu } from "./styled";
import Descrição from "../../img/Descrição.png"

const Home = (props) => {
    const {films, setFilms }= props

    const FilterFilms = films.results?.map((film) => {
        return film.poster_path
    })

    console.log(FilterFilms)

    return (
        <div>
            <FilterMenu>
                <img src={Descrição} />
            </FilterMenu>
        </div>
    )
}

export default Home
