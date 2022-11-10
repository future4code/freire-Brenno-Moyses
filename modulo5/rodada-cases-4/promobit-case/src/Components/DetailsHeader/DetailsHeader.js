import React, { useState } from "react";
import { IMAGE_URL } from "../../Constants/constants";
import {DetailsHeaderContainer, InfosContainer, Sinopse} from "./styled"
import CircularProgress from "@mui/material/CircularProgress";



const DetailsHeader = (props) => {
    const {details} = props

    const backdrop = details.backdrop_path
    const vote = String(details.vote_average)

    console.log(details)

    return (
        <DetailsHeaderContainer>
            <img src={IMAGE_URL+backdrop}/> 
            <InfosContainer>
                    <h1>{details.title}</h1>
            <CircularProgress
                variant="determinate"
                value={Number(vote)}
                id={"progress"}
                size={"60px"}
            />
            {vote}%
                <Sinopse>
                    <h2>Sinopse</h2>
                    <p>{details.overview}</p>
                </Sinopse>
            </InfosContainer>
        </DetailsHeaderContainer>
    )
}

export default DetailsHeader