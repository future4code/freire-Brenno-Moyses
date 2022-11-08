import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";

import { IMAGE_URL } from "../../Constants/constants";
import { goToDetails } from "../../Routes/coordinator";

import { ImageFilm } from "./styled";
import { CardFilmContainer } from "./styled";
import { Title } from "./styled";
import { Data } from "./styled";

const CardFilm = (props) => {
    const navigate = useNavigate()

    const {id,title,backdrop,data}= props

    return (
        <CardFilmContainer onClick={() =>goToDetails(navigate, id)}>
            <ImageFilm src={IMAGE_URL+backdrop}/>
            <Title>{title}</Title>
            <Data>{data}</Data>
        </CardFilmContainer>
    )
}

export default CardFilm