import React, { useState } from "react";
import { IMAGE_URL } from "../../Constants/constants";
import { DetailsContainer, DetailsHeaderContainer} from "./styled";




const DetailsHeader = (props) => {
    const {details} = props

    const backdrop = details.backdrop_path

    console.log(details)

    return (
        <DetailsHeaderContainer>
            <img src={IMAGE_URL+backdrop}/> 
            <DetailsContainer>
                <h1>{details.title}</h1>
                <h2>Sinopse</h2>
                <p>{details.overview}</p>
            </DetailsContainer>
        </DetailsHeaderContainer>
    )
}

export default DetailsHeader