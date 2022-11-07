import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IMAGE_URL } from "../../Constants/constants";

import { ImageFilm } from "./styled";
import { CardFilmContainer } from "./styled";
import { Title } from "./styled";
import { Data } from "./styled";

const CardFilm = (props) => {
    const {id,title,backdrop,data}= props

    console.log(title)

    return (
        <CardFilmContainer>
            <ImageFilm src={IMAGE_URL+backdrop}/>
            <Title>{title}</Title>
            <Data>{data}</Data>
        </CardFilmContainer>
    )
}

export default CardFilm